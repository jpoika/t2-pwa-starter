import * as React from 'react';
import {Tabs} from 'material-ui/Tabs';
import MainContent from './MainContent';
import {AppPageInterface} from './Main';
import AppBar from '../containers/AppBar';
//import ReactSwipeableViews from 'react-swipeable-views';

export interface Props {
  setPageTitle(title:string): void;
  screen:{width: number, height: number,orientation: string}
  title: string;
  defaultTitle: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  titlePath: string;
  appPage: AppPageInterface;
  tabId: number;
  tabsId: string | number;
  onTitleClick: (event: any) => void;
  mainTabs: JSX.Element[]
}

export interface State {

}


export default class MainTabs extends React.Component<any,any> {

  handleChange = (value) => {
    const {appPage} = this.props;
    appPage.selectTab(null,value);
  }

  handleSwipeChange = (v,v2) => {
    //console.log(v,v2);
  }

  render() {

    const defaultProps = {...this.props,basePath: '/',mainTabs: undefined};
    const tabs = typeof this.props.tempTabs !== 'undefined' ? this.props.tempTabs : this.props.mainTabs;
    return (
      <div>
        <AppBar rightIcon={this.props.rightIcon} defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.props.onTitleClick} />
        
        <Tabs
          value={this.props.tabId}
          onChange={this.handleChange}
          children={tabs}
        />


        <MainContent {...defaultProps} />

        
      </div>
    );
  }
}