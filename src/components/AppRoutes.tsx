
import * as React from 'react';
import DefaultLeftIcon from './LeftMenuIcon';
import {routeComponentWithProps, routePageWithProps} from './AppHOC';
import MainHomePage from './HomePage';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import StoreRoutes from './StoreDemo/StoreRoutes';
import {AppPageInterface} from './Main';
import {Tab} from 'material-ui/Tabs';

export interface Props {
  appPage: AppPageInterface
}

export interface State {

}
class AppRoutes extends React.Component<Props, State>{

  componentWillMount(){
    const {appPage} = this.props;
    appPage.setTabs([
      <Tab label="Home" value="/" />,
      <Tab label="Demo" value="/store" />,
      <Tab label="Products" value="/store/products" />,
    ]);
  }

  renderRouteComponent = (Component) => {
      return routeComponentWithProps(Component,{...this.props, leftIcon: <DefaultLeftIcon />, rightIcon: null});
  }

  render(){
    const defaultProps = {...this.props,basePath: '/'};
    return <div>
                <Route path="/store" render={this.renderRouteComponent(StoreRoutes)} />
                <Route exact path="/" render={routePageWithProps(MainHomePage,defaultProps,"Home")} />
    </div>;
 
  }
}

export default withRouter(AppRoutes);
