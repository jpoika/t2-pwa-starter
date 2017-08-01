import * as React from 'react';
import  Page, {Props as PageProps} from './Page';

const withPropsComponent = (WrappedComponent,props) => {
  return <WrappedComponent {...props} />;
}


export const routePageWithProps = (WrappedComponent,props:PageProps,title) => {
    return (routeProps) => {
      const combinedProps = {...props,title: title};
      return <Page {...combinedProps}>{withPropsComponent(WrappedComponent,{...props,...routeProps})}</Page>;
    }
}

export const routeComponentWithProps = (WrappedComponent,props:PageProps) => {
    return (routeProps) => {
      return withPropsComponent(WrappedComponent,{...props,...routeProps});
    }
}