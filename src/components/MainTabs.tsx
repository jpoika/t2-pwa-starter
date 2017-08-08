import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MainContent from './MainContent';
import {AppPageInterface} from './Main';
import AppBar from '../containers/AppBar';
// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };
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
}

export interface State {

}
export default class MainTabs extends React.Component<any,any> {

  handleChange = (value) => {
    console.log('change to ' + value);
    const {appPage} = this.props;
    appPage.history.push(value);
    appPage.setTab(null,value);
  }

  render() {

    const defaultProps = {...this.props,basePath: '/'};
    return (
      <div>
        <AppBar rightIcon={this.props.rightIcon} defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.props.onTitleClick} />
        <Tabs
          value={this.props.tabId}
          onChange={this.handleChange}
        >

          <Tab label="Home" value="/">
          </Tab>
          <Tab label="Demo" value="/store">
          </Tab>
          <Tab label="Products" value="/store/products">
          </Tab>
        </Tabs>

        <MainContent {...defaultProps} />
        
      </div>
    );
  }
}