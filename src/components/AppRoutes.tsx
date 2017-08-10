
import * as React from 'react';
import DefaultLeftIcon from './LeftMenuIcon';
import {routeComponentWithProps, routePageWithProps} from './AppHOC';
import MainHomePage from './HomePage';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import StoreRoutes from './StoreDemo/StoreRoutes';
import {AppPageInterface} from './Main';
//import DefaultTabs from './DefaultTabs';
//import ReactSwipeableViews from 'react-swipeable-views';
import RouteTabs from './RouteTabs';
export interface Props {
  appPage: AppPageInterface
}

export interface State {

}
class AppRoutes extends React.Component<Props, State>{



  renderRouteComponent = (Component) => {
 
      return routeComponentWithProps(Component,{...this.props, leftIcon: <DefaultLeftIcon />, rightIcon: null});
  }

  render(){
  
    const defaultProps = {...this.props, basePath: '/', tab: 0};
    return <RouteTabs id='appTabs' appPage={this.props.appPage}>
                <Route tab title={'Home'} exact path="/" render={routePageWithProps(MainHomePage,defaultProps,"Home")} />
                <Route tab title={'Demo'} path="/store" render={this.renderRouteComponent(StoreRoutes)} />
    </RouteTabs>;
 
  }
}

export default withRouter(AppRoutes);
