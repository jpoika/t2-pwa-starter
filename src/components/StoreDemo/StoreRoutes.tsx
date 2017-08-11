
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from "./HomePage";
import {AppPageInterface} from '../Main';
import LeftMenuIcon from './LeftMenuIcon'
import {menuItem,leftIconProps} from '../AppHOC';
import ProductDetails from '../../containers/StoreDemo/ProductDetails';
import ProductsList from '../../containers/StoreDemo/ProductsList';
import RouteGroup from '../RouteGroup';
import RouteItem from '../NavItem';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string}
}

export interface State {
  // appPage: AppPageInterface;
  // match: {url: string}
}

class StoreRoutes extends React.Component<Props, State>{

  render(){
    const basePath = '/store';
    const defaultProps = {...this.props, ...leftIconProps(basePath),basePath: basePath};

    const leftMenuIcon = menuItem(LeftMenuIcon,basePath);
    console.log(this.props);
    return <RouteGroup id='storeTabs' appPage={this.props.appPage}>
                <RouteItem {...defaultProps} tab={0} title={"Store"} exact path={basePath} leftIcon={leftMenuIcon} componentPage={HomePage} />
                <RouteItem {...defaultProps} tab={1} title={"Products"}  exact path={basePath + '/products'} componentPage={ProductsList} />
                <RouteItem {...defaultProps} tabIndex={1} title={"Details"} exact path={basePath + '/products/:id'} {...leftIconProps(basePath + '/products')} componentPage={ProductDetails} />
           </RouteGroup>;
 
  }
}

export default withRouter(StoreRoutes);
