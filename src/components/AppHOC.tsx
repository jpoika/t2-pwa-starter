/**
 * @file AppHOC.tsx
 * AppHOC represents higher order components mostly used to enforce props interface.
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
import  Page, {Props as PageProps} from './Page';
import BackButton from './BackButton';
interface HOCPageProps extends PageProps{
  basePath: string;
  [propName: string]: any;
}

const withPropsComponent = (WrappedComponent,props) => {
  const componentProps = {...props, tab: undefined, tabIndex: undefined};
  return <WrappedComponent {...componentProps} />;
}


export const routePageWithProps = (WrappedComponent,props:HOCPageProps) => {
    return (routeProps) => {
      const tab = typeof props.tab !== 'undefined' ? props.tab : props.tabIndex;
      const combinedProps = {...props,tab: tab};
      return <Page {...combinedProps}>{withPropsComponent(WrappedComponent,{...props,...routeProps})}</Page>;
    }
}

export const routeComponentWithProps = (WrappedComponent,props) => {
    return (routeProps) => {
      return withPropsComponent(WrappedComponent,{...props,...routeProps});
    }
}

export const menuItem = (WrappedComponent,basePath:string = '/') => {

      return withPropsComponent(WrappedComponent,{basePath});
}

export const backIcon = (path:string = '/') => {

      return <BackButton path={path} />;
}

export const leftIconProps = (path:string): {leftIcon: JSX.Element, titlePath: string} => {

      return {
                leftIcon: backIcon(path),
                titlePath: path
      };
}
