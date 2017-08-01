
import * as React from 'react';
import AppBar from '../containers/AppBar';
import DefaultLeftIcon from './LeftMenuIcon';
import EulaDialog from '../containers/Eula';
import {routeComponentWithProps} from './AppHOC';

import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {withRouter} from 'react-router-dom';
import SnackbarGlobal from '../containers/SnackbarGlobal';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import StoreRoutes from './StoreDemo/StoreRoutes';
import {AppPageInterface} from './Main';
export interface Props {
  setPageTitle(title:string): void;
  history: any;
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
  appPage: AppPageInterface;
}

export interface State {

}
class App extends React.Component<Props, State>{

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;
    history.push(this.props.titlePath);
  }

  renderRouteComponent = (Component) => {
      return routeComponentWithProps(Component,{...this.props, leftIcon: <DefaultLeftIcon />});
  }

  render(){

    return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <AppBar defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.handleTitleClick} />

                <Route path="/" render={this.renderRouteComponent(StoreRoutes)} />
  
                <SnackbarGlobal />
                <EulaDialog />
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
