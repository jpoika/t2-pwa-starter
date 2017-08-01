import * as React from 'react';
import MainAppBar from './MainAppBar';
import LeftMenuIcon from './LeftMenuIcon';

export interface AppPageInterface {
  screen:{width: number, height: number, orientation: string};
  setMainIcon(icon: JSX.Element): void;
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
}

export interface State {
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
}

export default class Main extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    leftIcon: <LeftMenuIcon />
  }
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: this.props.leftIcon,
      titlePath: '/'
    }
  }

  handleSetMainIcon = (leftIcon: JSX.Element) => {
    console.log(leftIcon);
    this.setState({leftIcon})
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
      version: this.props.version
    }
  }
  render(){
    return <MainAppBar appPage={this.getAppPageObject()} {...this.state} />
  }
}