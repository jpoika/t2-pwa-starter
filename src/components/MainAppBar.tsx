
import * as React from 'react';
import AppBar from '../containers/AppBar';
import BackButton from './BackButton';
import HomePage from './HomePage';

import EulaDialog from '../containers/Eula';

import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {withRouter} from 'react-router-dom';
import Page from '../Containers/Page';
import SnackbarGlobal from '../containers/SnackbarGlobal';
import ProductFavoritesListPage from '../containers/StoreDemo/ProductFavoritesListPage';
import ProductDetailsPage from '../containers/StoreDemo/ProductDetailsPage';


const muiTheme = getMuiTheme({
  palette: {
    textColor: '#000000',
    primary1Color: '#000000',
    primary2Color: '#1b4583',
    primary3Color: '#1b4583'
  },
  appBar: {
    height: 50,
  },
});

export interface AppPageInterface {
  screen:{width: number, height: number, orientation: string};
  setMainIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
  setTitlePath(titlePath:string):void;
  history: any;
  showProgress: (to_ms?: number) => void;
  hideProgress: () => void;
  navigateProgress: (path: string,to_ms?: number) => void;
  progressVisible: boolean;
}

export interface Props {
  setPageTitle(title:string): void;
  history: any;
}

export interface State {
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
  showProgressIndicator: boolean;
}
class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: <LeftMenuIcon />,
      titlePath: '/',
      showProgressIndicator: false
    }
  }

  handleSetMainIcon = (leftIcon: JSX.Element) => {
    this.setState({leftIcon})
  }

  handleSetTitlePath = (titlePath: string) => {
    this.setState({titlePath})
  }

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;
    const {titlePath} = this.state;
    history.push(titlePath);
  }

  handleNavigationProgress = (path,to_ms = 2000) => {
    this.handleShowProgress(to_ms);
    const {history} = this.props;

    history.push(path);
    
  }

  handleShowProgress = (to_ms = 2000) => {
    this.setState({
      showProgressIndicator: true,
    });
    const progTo = setTimeout(
      () => {
        clearTimeout(progTo );
        this.handleHideProgress();
      },to_ms);
  }

  handleHideProgress = () => {
    this.setState({
      showProgressIndicator: false,
    })
  }


  getAppPageObject = ():AppPageInterface => {
    const {setPageTitle,history} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle,
      history,
      setTitlePath: this.handleSetTitlePath,
      showProgress: this.handleShowProgress,
      hideProgress: this.handleHideProgress,
      navigateProgress: this.handleNavigationProgress,
      progressVisible: this.state.showProgressIndicator
    }
  }

  componentDidMount(){
    this.handlePageResize();
  }

  getScreenDimensions = () => {
    const orientation = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
 
    return {
       width: window.innerWidth,
       height: window.innerHeight,
       orientation
    }
  }

  hasScreenChanged = () => {
    const {width, height} = this.state.screen;
    const currentDims = this.getScreenDimensions();

    if(width !== currentDims.width){
      return true;
    }
    if(height !== currentDims.height){
      return true;
    }
    return false;
  }

  handlePageResize = () => {
    let resizeTimeoutId = null;
    window.onresize = () => {
       if(resizeTimeoutId){
         clearTimeout(resizeTimeoutId);
       }

       if(this.hasScreenChanged()){

         resizeTimeoutId = setTimeout(
                () => {
                  
                 this.setState({
                   screen: this.getScreenDimensions()
                 }); 
                  
                },
              500);
       }

      
    }
  }

  renderRouteComponent = (Component,extraProps:any = {}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />,
        appPage: this.getAppPageObject(),
        titlePath: "/"
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page titlePath={extraProps.titlePath} leftIcon={extraProps.leftIcon} appPage={extraProps.appPage}><Component {...routeProps} {...extraProps} /></Page>;
    }
  }

  render(){
    //const {screen,showProgressIndicator} = this.state;


                // <Route exact path="/leadership" render={this.renderRouteComponent(LeadershipPage,{titlePath: "/", leftIcon: <BackButton path="/" />})} />
                // <Route exact path="/leadership/:id" render={this.renderRouteComponent(LeadershipDetailsPage,{titlePath: "/leadership",leftIcon: <BackButton path="/leadership" />})} />
    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar  leftIcon={this.state.leftIcon} onTitleClick={this.handleTitleClick} />

                <Route exact path="/" render={this.renderRouteComponent(HomePage,{titlePath: "/",leftIcon: <BackButton path="/" />})} />
                <Route exact path="/favorites" render={this.renderRouteComponent(ProductFavoritesListPage,{titlePath: "/",leftIcon: <BackButton path="/" />})} />
                <Route exact path="/products/:id" render={this.renderRouteComponent(ProductDetailsPage,{titlePath: "/products",leftIcon: <BackButton path="/products" />})} />
  
                <SnackbarGlobal />
                <EulaDialog />
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
