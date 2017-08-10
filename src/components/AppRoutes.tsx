
import * as React from 'react';
import DefaultLeftIcon from './LeftMenuIcon';
import {routeComponentWithProps, routePageWithProps} from './AppHOC';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Home from './AdApp/Home';
import Assessments from './AdApp/Assessments';
import Videos from './AdApp/Videos';
import Video from './AdApp/Video';
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
                <Route tab={0} title={'Overview'} exact path="/" render={routePageWithProps(Home,defaultProps,"Home")} />
                <Route tab={1} title={'Assessment'} path="/assessments" render={routePageWithProps(Assessments,{...defaultProps,tab:1},"Assessment")} />
                <Route tab={2} title={'Videos'} path="/vidoes" render={routePageWithProps(Videos,{...defaultProps,tab:2},"Videos")} />
                <Route tab={3} title={'Resources'} path="/resources" render={routePageWithProps(Video,{...defaultProps,tab:3},"Resources")} />
    </RouteTabs>;
 
  }
}

export default withRouter(AppRoutes);
