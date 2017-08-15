/**
 * These are higher order components mostly used to enforce props interface
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
  console.log(componentProps);
  return <WrappedComponent {...componentProps} />;
}


export const routePageWithProps = (WrappedComponent,props:HOCPageProps,title) => {
    return (routeProps) => {
      const tab = typeof props.tab !== 'undefined' ? props.tab : props.tabIndex;
      const combinedProps = {...props,title: title,tab: tab};
      // console.log(routeProps);
      // console.log({...props,...routeProps});
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

