
import * as React from 'react';
import MainHomePage from './HomePage';
import {withRouter} from 'react-router-dom';
import StoreRoutes from './StoreDemo/StoreRoutes';
import {AppPageInterface} from './Main';
//import DefaultTabs from './DefaultTabs';
//import ReactSwipeableViews from 'react-swipeable-views';
import RouteGroup from './RouteGroup';
import RouteItem from './NavItem';

export interface Props {
  appPage: AppPageInterface
}

export interface State {

}
class AppRoutes extends React.Component<Props, State>{


  render(){
  
    const defaultProps = {...this.props, basePath: '/'};
    return <RouteGroup id='appTabs' appPage={this.props.appPage}>
                <RouteItem {...defaultProps} tab={0} title={'Home'} exact path="/" componentPage={MainHomePage} />
                <RouteItem {...defaultProps} tab={0} title={'Demo'} path="/store" component={StoreRoutes} />
       
    </RouteGroup>;
 
  }
}

export default withRouter(AppRoutes);
