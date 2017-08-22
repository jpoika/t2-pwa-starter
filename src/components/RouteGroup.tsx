/**
 * @file RouteGroup.tsx
 * Route group sets the tabs for the application based on the current
 * group of routes.
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


export default class RouteGroup extends React.Component<Props,any> {

  handleTabActive = (path) => {
    const {appPage, onActive} = this.props;
    return (tab) => {
      appPage.history.push(path);
      onActive && onActive(tab, path);
    }
  }


  handleCreateTabs = () => {
    const {appPage} = this.props;
    let tabs = [];

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
