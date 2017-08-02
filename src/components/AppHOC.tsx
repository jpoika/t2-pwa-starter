/**
 * These are higher order components mostly used to enforce props interface
 */
import * as React from 'react';
import  Page, {Props as PageProps} from './Page';

interface HOCPageProps extends PageProps{
  basePath: string;
}

const withPropsComponent = (WrappedComponent,props) => {
  return <WrappedComponent {...props} />;
}


export const routePageWithProps = (WrappedComponent,props:HOCPageProps,title) => {
    return (routeProps) => {
      const combinedProps = {...props,title: title};
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