
import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import HomePage from "./HomePage";
import {AppPageInterface} from '../Page';
import Page from '../Page';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string}
}

class StoreRoutes extends React.Component<Props, {}>{

  renderComponentPage = (Component,title) => {
    const {appPage} = this.props;
    return (routeProps) => {
      return <Page title={title} appPage={appPage}><Component /></Page>;
    }
  }
  render(){
    const {match} = this.props;
    return <div>
                <Route path={match.url} render={this.renderComponentPage(HomePage,"Demo Home")} />
           </div>;
 
  }
}

export default withRouter(StoreRoutes);
