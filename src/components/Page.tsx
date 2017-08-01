import * as React from 'react';
import {AppPageInterface} from './Main';
export interface Props {
  appPage: AppPageInterface;
  leftIcon?: JSX.Element;
  titlePath?: string; //the path navigated to when appbar title is clicked
  title?: string;
}

export interface State {
  
}

export default class Page extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    title: '',
    titlePath: '',
    leftIcon: null
  }


  componentWillMount(){
    const {appPage,leftIcon,titlePath,title} = this.props;
    
    appPage.setMainIcon(leftIcon);

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