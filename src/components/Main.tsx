import * as React from 'react';
const loadMainAppBar = require('bundle-loader?lazy!./MainAppBar');
const loadMainTabs = require('bundle-loader?lazy!./MainTabs');
import Bundle from './Bundle';
// import MainAppBar from './MainAppBar';
import LeftMenuIcon from './LeftMenuIcon';

export interface AppPageInterface {
  screen:{width: number, height: number, orientation: string};
  setMainIcon(icon: JSX.Element): void;
  setRightIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
  setTitlePath(titlePath:string):void;
  selectTab(tabsId: string | number, tabId:number): void;
  history: any;
  version: string;
  appType: string;
  setTabs: (tabs: JSX.Element[]) => void;
  setDefaultTabs: (tabs: JSX.Element[]) => void;
  sendMessage(title:string): void;
  tabCount: number;
  tabRemoved: () => void;
  tabAdded: () => void;
}

export interface Props {
  setPageTitle(title:string): void;
  sendMessage(title:string): void;
  history: any;
  version: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  title: string;
  appType: string;
}

export interface State {
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
  rightIcon: JSX.Element;
  tabId: number;
  tabsId: string | number;
  mainTabs: JSX.Element[];
  tempTabs: JSX.Element[] | undefined;
  tabCount: number;
}

export default class Main extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    leftIcon: <LeftMenuIcon />,
    rightIcon: null
  }
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: this.props.leftIcon,
      titlePath: '/',
      rightIcon: this.props.rightIcon,
      tabsId: null,
      tabId: 0,
      mainTabs: [],
      tempTabs: undefined,
      tabCount: 0
    }
  }

  handleSetTabs = (tempTabs: JSX.Element[]) => {
    this.setState({
      tempTabs
    });
  }

  handleTabAdded = () => {
    this.setState({
      tabCount: this.state.tabCount + 1
    });
  }

  handleTabRemoved = () => {
    if(this.state.tabCount){
      this.setState({
        tabCount: this.state.tabCount - 1
      });
    }
  }
  handleDefaultTabs = (mainTabs: JSX.Element[]) => {
    this.setState({
      mainTabs
    });
  }

  handleSelectTab = (tabsId: string | number,tabId:number) => {
    this.setState({
      tabsId,
      tabId
    });
  }
  
  handleSetMainIcon = (leftIcon: JSX.Element) => {
    this.setState({leftIcon})
  }

  handleSetRightIcon = (rightIcon: JSX.Element) => {
    this.setState({rightIcon})
  }

  handleSetTitlePath = (titlePath: string) => {
    this.setState({titlePath})
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

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;
    if(this.state.titlePath){
      history.push(this.state.titlePath);
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
  getAppPageObject = ():AppPageInterface => {
    const {setPageTitle,history} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle,
      history,
      setTitlePath: this.handleSetTitlePath,
      version: this.props.version,
      setRightIcon: this.handleSetRightIcon,
      selectTab: this.handleSelectTab,
      appType: this.props.appType,
      setTabs: this.handleSetTabs,
      setDefaultTabs: this.handleDefaultTabs,
      sendMessage: this.props.sendMessage,
      tabAdded: this.handleTabAdded,
      tabRemoved: this.handleTabRemoved,
      tabCount: this.state.tabCount
    }
  }
  render(){
 
    const loadComponent =  this.props.appType === 'tabs' ? loadMainTabs : loadMainAppBar;
    //async loading
    return <Bundle load={loadComponent} >
      {(LayoutComp) => {
          return <LayoutComp appPage={this.getAppPageObject()} {...this.state} onTitleClick={this.handleTitleClick} />
        }}
    </Bundle>
  }
}