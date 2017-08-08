import * as React from 'react';
const loadMainAppBar = require('bundle-loader?lazy!./MainAppBar');
import Bundle from './Bundle';
// import MainAppBar from './MainAppBar';
import LeftMenuIcon from './LeftMenuIcon';

export interface AppPageInterface {
  screen:{width: number, height: number, orientation: string};
  setMainIcon(icon: JSX.Element): void;
  setRightIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
  setTitlePath(titlePath:string):void;
  history: any;
  version: string;
}

export interface Props {
  setPageTitle(title:string): void;
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
      rightIcon: this.props.rightIcon
    }
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
      setRightIcon: this.handleSetRightIcon
    }
  }
  render(){
    //return <MainAppBar appPage={this.getAppPageObject()} {...this.state} />
    return <Bundle load={loadMainAppBar} >
      {(LayoutComp) => {
          return <LayoutComp appPage={this.getAppPageObject()} {...this.state} />
        }}
    </Bundle>
  }
}