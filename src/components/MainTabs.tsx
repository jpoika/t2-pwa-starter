/**
 * @file MainTabs.tsx
 * Renders the AppBar, Tabs, and Main content for the application.
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
import {Tabs} from 'material-ui/Tabs';
import MainContent from './MainContent';
import {AppPageInterface} from './Main';
import AppBar from '../containers/AppBar';

export interface Props {
  setPageTitle(title:string): void;
  screen:{width: number, height: number,orientation: string}
  title: string;
  defaultTitle: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  titlePath: string;
  appPage: AppPageInterface;
  tabId: number;
  tabsId: string | number;
  onTitleClick: (event: any) => void;
  mainTabs: JSX.Element[]
}

export interface State {

}

export default class MainTabs extends React.Component<any,any> {

  handleChange = (value) => {
    const {appPage} = this.props;
    appPage.selectTab(null,value);
  }

  handleSwipeChange = (v,v2) => {
    //console.log(v,v2);
  }

  render() {

    const defaultProps = {...this.props,basePath: '/',mainTabs: undefined};
    const tabs = typeof this.props.tempTabs !== 'undefined' ? this.props.tempTabs : this.props.mainTabs;
    return (
      <div>
        <AppBar rightIcon={this.props.rightIcon} defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.props.onTitleClick} />
        <Tabs
          value={this.props.tabId}
          onChange={this.handleChange}
          children={tabs}
        />
        <MainContent {...defaultProps} />
      </div>
    );
  }
}
