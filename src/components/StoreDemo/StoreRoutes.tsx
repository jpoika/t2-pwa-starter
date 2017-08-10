
import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import HomePage from "./HomePage";
import {AppPageInterface} from '../Main';
import LeftMenuIcon from './LeftMenuIcon'
import {routePageWithProps,menuItem,leftIconProps} from '../AppHOC';
import ProductDetails from '../../containers/StoreDemo/ProductDetails';
import ProductsList from '../../containers/StoreDemo/ProductsList';
import RouteTabs from '../RouteTabs';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string}
}

class StoreRoutes extends React.Component<Props, {}>{

  render(){
    const basePath = '/store';
    const defaultProps = {...this.props, ...leftIconProps(basePath),basePath: basePath,tab: 0};

    const leftMenuIcon = menuItem(LeftMenuIcon,basePath);
    const defaultProductsProps = {...defaultProps,tab: 1};
    return <RouteTabs id='storeTabs' appPage={this.props.appPage}>
                <Route title={"Store"} tab exact path={basePath} render={routePageWithProps(HomePage, {...defaultProps,leftIcon: leftMenuIcon}, "Demo Home")} />
                <Route title={"Products"} tab exact path={basePath + '/products'} render={routePageWithProps(ProductsList, defaultProductsProps,"Products")} />
                <Route exact path={basePath + '/products/:id'} render={routePageWithProps(ProductDetails, {...defaultProductsProps,/* //TODO */ ...leftIconProps(basePath + '/products')},"Details")} />
           </RouteTabs>;
 
  }
}

export default withRouter(StoreRoutes);
