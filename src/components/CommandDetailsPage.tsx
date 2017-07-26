import * as React from 'react';
import {ProductInterface} from '../res/data/products';
import {AppPageInterface} from './AppTheme';
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

export default class CommandDetails extends React.Component<Props, State>{
  static MAX_WIDTH:number = 640;

  componentWillMount(){
    const {appPage} = this.props;
    appPage.setPageTitle("Command Details");
  }
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = CommandDetails.MAX_WIDTH;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.90;
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

