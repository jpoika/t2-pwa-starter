import * as React from 'react';
import {ProductInterface} from '../../res/data/products';
//import ProductListItem from './ProductListItem';
import FavoriteCheckbox from '../FavoriteCheckBox';
//import Pagination from './ProductPagination';
import {GridList, GridTile} from 'material-ui/GridList';
import RightIcon from '../RightIcon';

import {AppPageInterface} from '../Main'
export interface FavoriteProductInterface extends ProductInterface{
  isFavorite: boolean;
}

export interface Props {
  
  itemClick(product: ProductInterface): void;
  setPage: (pageIdx: number) => void;
  toggleFavorite(item: FavoriteProductInterface): void;

  history:{push: any}
  products: FavoriteProductInterface[];
  page: number;
  lastPage: number;
  searchText: string;
  cols?: number;
  appPage:AppPageInterface;
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

  componentWillMount(){
    this.props.appPage.setRightIcon(<RightIcon />);
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
    const {products/*page,lastPage,setPage,*/} = this.props;
    
    // if(!products.length){
    //   let noResultsText = "No Results";
    //   if(searchText.length > 0){
    //     noResultsText += ` for "${searchText}"`
    //   }
    //   return <h3>{noResultsText}</h3>;
    // }
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