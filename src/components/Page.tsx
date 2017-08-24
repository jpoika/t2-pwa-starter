/**
 * @file Page.tsx
 * Wrapper that passes functionality down to a component.
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
import {AppPageInterface} from './Main';

export interface Props {
  appPage: AppPageInterface;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  titlePath?: string; //the path navigated to when appbar title is clicked
  title?: string;
  tab?: number;
  tabs?: JSX.Element[];
  defaultTabs?: JSX.Element[];
}


export interface State {

}

export default class Page extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    title: '',
    titlePath: '',
    leftIcon: null,
    rightIcon: null,
    tabs: undefined,
    defaultTabs: []
  }


  componentWillMount(){
    const {appPage,leftIcon,titlePath,title,rightIcon,tab} = this.props;

    appPage.setRightIcon(rightIcon);

    appPage.setMainIcon(leftIcon);

    if(typeof tab !== 'undefined'){
      appPage.selectTab('someId',tab);
    }

    if(titlePath){
       appPage.setTitlePath(titlePath);
    }

    if(title){
        appPage.setPageTitle(title);
    }

  }

  componentWillUnmount(){
     const {appPage} = this.props;
     appPage.setTabs(undefined);
     appPage.setTitlePath(null);
  }

  render(){
    return <div>
             {this.props.children}
           </div>;
  }
}
