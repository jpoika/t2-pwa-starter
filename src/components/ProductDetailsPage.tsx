import * as React from 'react';
import {ProductInterface} from '../res/data/products';
import {AppPageInterface} from './Page';
import FavoriteCheckbox from './FavoriteCheckBox';

import {greyContainer,whiteContainer} from './commonStyles';

export interface Props {
  product: ProductInterface;
  appPage: AppPageInterface;
  isFavorite: boolean;
  toggleFavorite: (product: ProductInterface, isFavorite:boolean) => void;
  sendMessage(message:string): void;
}

export interface State {

}

export default class ProductDetailsPage extends React.Component<Props, State>{

  componentWillMount(){
    const {appPage} = this.props;
    appPage.setPageTitle("Product Details");
  }

  handleSetToggle = () => {
    const {toggleFavorite,isFavorite,product,sendMessage} = this.props;
    return () => {
      const favMessage = isFavorite ? "Removed Favorite" : "Added Favorite";
      sendMessage(favMessage);
      toggleFavorite(product,isFavorite);
    }
  }

  render(){
    const {product,isFavorite} = this.props;

 
    return <div style={whiteContainer}>
              <div style={{greyContainer}}>
                <FavoriteCheckbox toggleFavorite={this.handleSetToggle()} checked={isFavorite} />
                <div>{product.title}</div>
                
              </div>
    </div>
  }
}

