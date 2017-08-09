import * as React from 'react';
import {AppPageInterface} from './Main';
export interface Props {
  appPage: AppPageInterface;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  titlePath?: string; //the path navigated to when appbar title is clicked
  title?: string;
  tab?: string;
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
    const {appPage,leftIcon,titlePath,title,rightIcon,tab,tabs,defaultTabs} = this.props;

    appPage.setRightIcon(rightIcon);

    appPage.setMainIcon(leftIcon);
    
    if(tab){
      appPage.selectTab('home',tab);
    }

    if(typeof tabs !== 'undefined'){
      appPage.setTabs(tabs);
    } else {
      appPage.setTabs(defaultTabs);
    }

    if(titlePath){
       appPage.setTitlePath(titlePath);
    }

    if(title){
        appPage.setPageTitle(title);
    }

  }

  render(){

    return <div>
             {React.cloneElement((this.props as any).children, this.props)}
           </div>;
  }
}