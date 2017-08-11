
import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Home from './AdApp/Home';
import Assessments from './AdApp/Assessments';
import Videos from './AdApp/Videos';
import Video from './AdApp/Video';
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
    return <RouteGroup toChildProps={...props} id='appTabs' appPage={this.props.appPage}>

        <RouteItem tab={0} title={'Overview'} exact path="/" componentPage={Home} />
        <RouteItem tab={1} title={'Assessment'} path="/assessments" componentPage={Assessments} />
        <RouteItem tab={2} title={'Videos'} path="/vidoes" componentPage={Videos} />
        <RouteItem tab={3} title={'Resources'} path="/resources" componentPage={Video} />
    </RouteGroup>;
 
  }
}

export default withRouter(AppRoutes);
