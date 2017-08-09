import * as React from 'react';
import {Tabs} from 'material-ui/Tabs';
import MainContent from './MainContent';
import {AppPageInterface} from './Main';
import AppBar from '../containers/AppBar';


export interface Props {
  setPageTitle(title:string): void;
  screen:{width: number, height: number,orientation: string}
  title: string;
  defaultTitle: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  titlePath: string;
  appPage: AppPageInterface;
  tabId: string | number;
  tabsId: string | number;
  onTitleClick: (event: any) => void;
  mainTabs: JSX.Element[]
}

export interface State {

}


export default class MainTabs extends React.Component<any,any> {

  handleChange = (value) => {
    const {appPage} = this.props;
    appPage.history.push(value);
    appPage.selectTab(null,value);
  }

  render() {

    const defaultProps = {...this.props,basePath: '/',mainTabs: undefined};
    return (
      <div>
        <AppBar rightIcon={this.props.rightIcon} defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.props.onTitleClick} />
        
        <Tabs
          value={this.props.tabId}
          onChange={this.handleChange}
          children={this.props.mainTabs}
        />

        <MainContent {...defaultProps} />
        
      </div>
    );
  }
}