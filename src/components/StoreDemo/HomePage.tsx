import * as React from 'react';
import {AppPageInterface} from '../Main';
import ProductsList from '../../containers/StoreDemo/ProductsList';
export interface Props {
  appPage: AppPageInterface;
}


export default class HomePage extends React.Component<Props, {}>{

  render(){
    const {appPage} = this.props;
    return <div>
              <h3>App Version {appPage.version}</h3>

              <ProductsList />
    </div>;
  }
}