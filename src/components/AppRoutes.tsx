
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
  
    const props = {...this.props, basePath: '/'};

    return <RouteGroup appPage={this.props.appPage} id='appTabs' >
                <RouteItem {...props} tab={0} title={'Home'} exact path="/" componentPage={MainHomePage} />
                <RouteItem {...props} tab={0} title={'Demo'} path="/store" component={StoreRoutes} />
    </RouteGroup>;
 
  }
}

export default withRouter(AppRoutes);
