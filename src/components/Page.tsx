import * as React from 'react';
export interface Props {
  appPage: AppPageInterface;
  leftIcon: JSX.Element;
  titlePath: string; //the path navigated to when appbar title is clicked
}

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

export interface State {
  
}

export default class Page extends React.Component<Props, State>{
  
  componentWillMount(){
    const {appPage,leftIcon,titlePath} = this.props;
    appPage.setMainIcon(leftIcon);
    appPage.setTitlePath(titlePath);
  }

  render(){

    return <div>
             {React.cloneElement((this.props as any).children, this.props)}
           </div>;
  }
}