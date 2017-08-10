import * as React from 'react';
//import ReactSwipeableViews from 'react-swipeable-views';
import {Tab} from 'material-ui/Tabs';
import {AppPageInterface} from './Main';
export interface Props {
  id: string;
  appPage: AppPageInterface;
  onActive?: (tab: any, path: string) => void;
  children?: JSX.Element[];
}

export interface State {

}


export default class RouteTabs extends React.Component<Props,any> {

  handleTabActive = (path) => {
    const {appPage,onActive} = this.props;
    return (tab) => {
      appPage.history.push(path);
      onActive && onActive(tab, path);
    }
  }
  

  handleCreateTabs = () => {
    const {appPage} = this.props;
    let tabs = []

    this.props.children
      .filter((child) => typeof child.props['tab'] !== 'undefined')
      .map((child, idx) => {
        tabs.push(<Tab onActive={this.handleTabActive(child.props.path)} label={child.props.title} value={idx} />);
      });

    appPage.setDefaultTabs(tabs);
    appPage.tabAdded();
  }
  componentWillMount(){
    this.handleCreateTabs();
  }

  componentWillUnmount(){
    const {appPage} = this.props;
    appPage.setDefaultTabs([]);
    appPage.tabRemoved();
  }

  componentWillUpdate(nextProps, nextState){
     if(nextProps.appPage.tabCount < this.props.appPage.tabCount){
        this.handleCreateTabs();
     }
  }

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}