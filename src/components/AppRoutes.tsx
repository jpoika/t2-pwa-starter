/**
 * @file AppRoutes.tsx
 * File responsible for setting routes for the application.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Home from './AdApp/Home';
import Assessments from './AdApp/Assessments';
import VideosList from '../containers/AdApp/VideosList';
import Video from '../containers/AdApp/Video';

import Library from '../components/AdApp/Library';
import Links from '../components/AdApp/Links';

import Resources from './AdApp/Resources';
import BackButton from './BackButton';
import LeftMenuIcon from './LeftMenuIcon';
//import DefaultTabs from './DefaultTabs';
//import ReactSwipeableViews from 'react-swipeable-views';
import RouteGroup from './RouteGroup';
import RouteItem from './RouteItem';

export interface Props {
  appPage: AppPageInterface
}

export interface State {

}
class AppRoutes extends React.Component<Props, State>{



  render(){

    const props = {...this.props, basePath: '/', leftIcon: <LeftMenuIcon />};
    //const vprops = {...this.props, basePath: undefined};

    //common resource route properties
    const rProps = {titlePath: '/resources', leftIcon: <BackButton path="/resources" />, basePath: '/resources'};

    return <RouteGroup defaultProps={props} appPage={this.props.appPage}>

        <RouteItem tab={0} title={'Home'} exact path="/" componentPage={Home} />

        <RouteItem  titlePath={'/assessments'} basePath="/assessments" tab={1} title={'Assessments'} exact path="/assessments" componentPage={Assessments} />
        <RouteItem  basePath="/assessments" tabIndex={1} title={'Assessment'} leftIcon={<BackButton path="/assessments" />} exact path="/assessments/:id" componentPage={Assessments} />

        <RouteItem  basePath="/videos" tab={2} title={'Videos'} exact path="/videos" componentPage={VideosList} />
        <RouteItem  titlePath={'/videos'} leftIcon={<BackButton path="/videos" />} basePath="/videos" tabIndex={2} title={'Video'} exact path="/videos/:id" componentPage={Video} />

        <RouteItem tab={3} basePath="/resources" title={'Resources'} exact path="/resources" componentPage={Resources} />
        <RouteItem {...rProps} tabIndex={3} title={'Library'} exact path="/resources/library" componentPage={Library} />
        <RouteItem {...rProps} tabIndex={3} title={'Links'} exact path="/resources/links" componentPage={Links} />

      </RouteGroup>;

  }
}

export default withRouter(AppRoutes);
