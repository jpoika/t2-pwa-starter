
import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import HomePage from "./HomePage";
import {AppPageInterface} from '../Main';
import LeftMenuIcon from './LeftMenuIcon'
import {routePageWithProps,menuItem,leftIconProps} from '../AppHOC';
import ProductDetailsPage from '../../containers/StoreDemo/ProductDetailsPage';
import ProductsList from '../../containers/StoreDemo/ProductsList';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string}
}

class StoreRoutes extends React.Component<Props, {}>{

  render(){
    const basePath = '/store';
    const defaultProps = {...this.props, ...leftIconProps(basePath),basePath: basePath};

    const leftMenuIcon = menuItem(LeftMenuIcon,basePath);

    return <div>
                <Route exact path={basePath} render={routePageWithProps(HomePage, {...defaultProps,leftIcon: leftMenuIcon}, "Demo Home")} />
                <Route exact path={basePath + '/products'} render={routePageWithProps(ProductsList, defaultProps,"Products")} />
                <Route exact path={basePath + '/products/:id'} render={routePageWithProps(ProductDetailsPage, {...defaultProps,/* //TODO */ ...leftIconProps(basePath + '/products')},"Details")} />
           </div>;
 
  }
}

export default withRouter(StoreRoutes);
