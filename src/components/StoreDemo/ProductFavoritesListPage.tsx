import * as React from 'react';
import {ProductInterface} from '../../res/data/products';
import CommandListItem from './ProductListItem';
import {List} from 'material-ui/List';
import {AppPageInterface} from '../Page';
import {whiteContainer} from '../commonStyles';
export interface Props {
  products:ProductInterface[];
  removeFavorite(product: ProductInterface): void;
  itemClick(product: ProductInterface): void;
  appPage: AppPageInterface;
}

export interface State {
 
}

export default class ProductFavoritesListPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Favorites");
  }

  handleItemClick = (product) => {
      const {itemClick} = this.props;
      itemClick(product);
  }
  render(){
    const {products} = this.props;
    const hasFavorites = products.length > 0;
    return <div style={whiteContainer}>
              <List>
                {!hasFavorites && <h3>Your Favorites List is empty</h3>}
                {products.map(product => {
                  return <CommandListItem key={product.id} itemClick={this.handleItemClick} product={product} />
                })}
              </List>

           </div>;
  }
}