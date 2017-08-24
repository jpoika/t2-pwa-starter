import * as React from 'react';
import {AppPageInterface} from './Main';
import DefaultLeftIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import {/*routePageWithProps,menuItem,leftIconProps,*/routePageWithProps,routeComponentWithProps} from './AppHOC';
//import DefaultTabs from './DefaultTabs';
//import ReactSwipeableViews from 'react-swipeable-views';
export interface Props {
  path: string;
  title: string;
  basePath: string;
  appPage: AppPageInterface;
  leftIcon?: any;
  tabIndex?: number;
  titlePath?: string;
  exact?: boolean;
  tab?: number;
  componentPage?: React.ReactNode;
  component?: React.ReactNode
}

export interface State {
  
}

export default class NavItem extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    exact: false,
    tab: undefined,
    tabIndex: undefined,
    basePath: '/'
  }
  renderRouteComponent = () => {
    return routeComponentWithProps(this.props.component,{...this.getCleanProps(), leftIcon: <DefaultLeftIcon />, rightIcon: null});
  }

  handleRenderPage = () => {
    return routePageWithProps(this.props.componentPage,this.getCleanProps(),this.props.title);
  }


  getCleanProps = () => {
    const props = {...this.props, componentPage: undefined,component: undefined};
    return props;
  }

  handleRender(){
    return this.props.componentPage ? this.handleRenderPage() : this.renderRouteComponent();
  }

  render(){
  
    return <Route {...this.getCleanProps()} render={this.handleRender()} />
  }
}







