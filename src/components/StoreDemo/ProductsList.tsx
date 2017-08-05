import * as React from 'react';
import {ProductInterface} from '../../res/data/products';
//import ProductListItem from './ProductListItem';
import FavoriteCheckbox from '../FavoriteCheckBox';
//import Pagination from './ProductPagination';
import {GridList, GridTile} from 'material-ui/GridList';

export interface FavoriteProductInterface extends ProductInterface{
  isFavorite: boolean;
}

export interface Props {
  products: FavoriteProductInterface[];
  toggleFavorite(item: {id: number,isFavorite: boolean}): void;
  itemClick(product: ProductInterface): void;
  history:{push: any}
  setPage: (pageIdx: number) => void;
  page: number;
  lastPage: number;
  searchText: string;
  cols?: number;
}

export interface State {

}

export default class ProductsList extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
    cols: 2
  }

  constructor(props,context){
    super(props);
  }

  handleItemClick = (product) => {
    const {itemClick} = this.props;
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      itemClick(product);
    }
  }

  handleToggleFavorite = (product:FavoriteProductInterface) => {
    const {toggleFavorite} = this.props;
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(product);
    }
  }

  render(){
    const {products,/*page,lastPage,setPage,*/searchText} = this.props;
    console.log(products);
    if(!products.length){
      let noResultsText = "No Results";
      if(searchText.length > 0){
        noResultsText += ` for "${searchText}"`
      }
      return <h3>{noResultsText}</h3>;
    }
    return <div>

              <GridList cols={this.props.cols}>
                {products.map(product => {
                  return <GridTile
                            key={product.id}
                            title={product.title}
                            onTouchTap={this.handleItemClick(product)}
                            actionIcon={<FavoriteCheckbox toggleFavorite={this.handleToggleFavorite(product)} checked={product.isFavorite} />}
                          >
                            <img key={product.image} src={product.image} />
                          </GridTile>
                })}
              </GridList>
              
           </div>;
  }
}