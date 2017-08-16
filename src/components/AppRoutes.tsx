
import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Home from './AdApp/Home';
import Assessments from './AdApp/Assessments';
import Assessment from './AdApp/Assessment';
import VideosList from '../containers/AdApp/VideosList';
import Video from '../containers/AdApp/Video';
import Resources from './AdApp/Resources';
import BackButton from './BackButton';
import LeftMenuIcon from './LeftMenuIcon';
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
  
    const props = {...this.props, basePath: '/', leftIcon: <LeftMenuIcon />};
    //const vprops = {...this.props, basePath: undefined};
    return <RouteGroup id='appTabs' appPage={this.props.appPage}>

        <RouteItem {...props} tab={0} title={'Home'} exact path="/" componentPage={Home} />
        <RouteItem {...props} basePath="/assessments" tab={1} title={'Assessments'} exact path="/assessments" componentPage={Assessments} />
        <RouteItem {...props} tabIndex={1} title={'Assessment'} exact path="/assessments/:slug" leftIcon={<BackButton path={'/assessments'} />} componentPage={Assessment} />
        <RouteItem {...props} basePath="/videos" tab={2} title={'Videos'} exact path="/videos" componentPage={VideosList} />
        <RouteItem {...props} basePath="/videos" tabIndex={2} title={'Video'} exact path="/videos/:id" componentPage={Video} />
        <RouteItem {...props} tab={3} basePath="/resources" title={'Resources'} path="/resources" componentPage={Resources} />

    </RouteGroup>;
 
  }
}

export default withRouter(AppRoutes);
