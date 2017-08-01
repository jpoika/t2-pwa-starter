
import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import HomePage from "./HomePage";
import {AppPageInterface} from '../Main';
import {routePageWithProps} from '../AppHOC';
import BackButton from '../BackButton';

import ProductDetailsPage from '../../containers/StoreDemo/ProductDetailsPage';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string}
}

class StoreRoutes extends React.Component<Props, {}>{

  render(){
    const {match} = this.props;
    const defaultProps = this.props;
    return <div>
                <Route exact path={match.url} render={routePageWithProps(HomePage, defaultProps, "Demo Home")} />
                <Route exact path={'/products/:id'} render={routePageWithProps(ProductDetailsPage, {...defaultProps,leftIcon:  <BackButton path="/" />},"Details")} />
           </div>;
 
  }
}

export default withRouter(StoreRoutes);
