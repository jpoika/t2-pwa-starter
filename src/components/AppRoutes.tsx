
import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Home from './AdApp/Home';
import Assessments from './AdApp/Assessments';

import VideosList from '../containers/AdApp/VideosList';
import Video from '../containers/AdApp/Video';
import Resources from './AdApp/Resources';
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
    //const vprops = {...this.props, basePath: undefined};
    return <RouteGroup id='appTabs' appPage={this.props.appPage}>

        <RouteItem {...props} tab={0} title={'Overview'} exact path="/" componentPage={Home} />
        <RouteItem {...props} tab={1} title={'Assessment'} path="/assessments" componentPage={Assessments} />
        <RouteItem {...props} basePath="/videos" tab={2} title={'Videos'} exact path="/videos" componentPage={VideosList} />
        <RouteItem {...props} basePath="/videos" tabIndex={2} title={'Video'} exact path="/videos/:id" componentPage={Video} />
        <RouteItem {...props} tab={3}  title={'Resources'} path="/resources" componentPage={Resources} />

    </RouteGroup>;
 
  }
}

export default withRouter(AppRoutes);
