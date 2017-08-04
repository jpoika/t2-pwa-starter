import * as React from 'react';
import {compose, createStore,applyMiddleware} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import * as localForage from "localforage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import thunk from 'redux-thunk';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/Main';

import reducer from './reducers';
import {setUserPlatform} from './actions';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

injectTapEventPlugin();

require('./index.html'); //load and emit index.html to destination directory
require('./manifest.json'); //load and emit manifest.json to destination directory
require("file-loader?name=[name].[ext]!./favicon.ico");

const render = (RootComponent: any) => {


  const thunkArgs = {
    isCordova: __IS_CORDOVA_BUILD__,
    platform: __IS_CORDOVA_BUILD__ ? (window as any).device.platform.toLowerCase() : 'browser',
    nativeSettings: __IS_CORDOVA_BUILD__  ? (window as any).cordova.plugins.settings : null,
    appPrefix: __REDUX_PERSIST_PREFIX__
  }

  const store = createStore(
      reducer,
      undefined,
      compose(
        applyMiddleware(thunk.withExtraArgument(thunkArgs)),
        autoRehydrate()
      )
    );


  persistStore(store,{
    blacklist: ['view'],
    //whitelist: [],
    storage: localForage,//You can choose a diffrent engine
    keyPrefix: __REDUX_PERSIST_PREFIX__
  });

  if(__DEVTOOLS__){
    store.subscribe(() => {
        console.log(store.getState()); // list entire state of app
    });
  }

  store.dispatch(setUserPlatform(thunkArgs.platform));

  const cordovaPause = () => {
     // store.dispatch(someAction());
  }

  const cordovaResume = () => {
      // store.dispatch(someAction());
  }

  if(__IS_CORDOVA_BUILD__){
    document.addEventListener("pause", cordovaPause, false);
    document.addEventListener("resume", cordovaResume, false);
  }




    ReactDOM.render(
        <AppContainer>
         <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Provider store={store}>
              <HashRouter>
                <RootComponent version={__APP_VERSION__} defaultTitle={"Starter App"} appType={'default'} />
              </HashRouter>
            </Provider>
          </MuiThemeProvider>
        </AppContainer>,
        document.getElementById("spaApp")
    );
}
if(__IS_CORDOVA_BUILD__){
  document.addEventListener("deviceready", function(){

       render(App);
  })
} else {

  render(App);


  // Hot Module Replacement API. Only used when running the dev server.
  if ((module as any).hot) {
    (module as any).hot.accept('./containers/Main', () => {
      render(App);
    });
  }

}
