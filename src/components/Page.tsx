import * as React from 'react';
import {AppPageInterface} from './Main';
export interface Props {
  appPage: AppPageInterface;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  titlePath?: string; //the path navigated to when appbar title is clicked
  title?: string;
  tab?: number;
  tabs?: JSX.Element[];
  defaultTabs?: JSX.Element[];
}


export interface State {
 // lastTabs: JSX.Element[];
}

export default class Page extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    title: '',
    titlePath: '',
    leftIcon: null,
    rightIcon: null,
    tabs: undefined,
    defaultTabs: []
  }


  componentWillMount(){
    const {appPage,leftIcon,titlePath,title,rightIcon,tab /* ,tabs,defaultTabs */} = this.props;

    appPage.setRightIcon(rightIcon);

    appPage.setMainIcon(leftIcon);

    if(typeof tab !== 'undefined'){
      appPage.selectTab('home',tab);
    }

    if(titlePath){
       appPage.setTitlePath(titlePath);
    }

    if(title){
        appPage.setPageTitle(title);
    }

  }

  componentWillUnmount(){
     const {appPage} = this.props;
     appPage.setTabs(undefined);
     appPage.setTitlePath(null);
  }

  render(){

    return <div>
             {this.props.children}
           </div>;
  }
}