import * as React from 'react';
import {ProductInterface} from '../res/data/products';
import CommandListItem from './CommandListItem';
import {List} from 'material-ui/List';
import CommandsPagination from './CommandsPagination';

export interface Props {
  products: ProductInterface[];
  addFavorite(product: ProductInterface): void;
  itemClick(product: ProductInterface): void;
  history:{push: any}
  setPage: (pageIdx: number) => void;
  page: number;
  lastPage: number;
  searchText: string;
}

export interface State {

}

export default class ProductsList extends React.Component<Props, State>{

  constructor(props,context){
    super(props);
  }

  handleItemClick = (product) => {
      const {itemClick} = this.props;
      itemClick(product);

  }

  render(){
    const {products,page,lastPage,setPage,searchText} = this.props;
    if(!products.length){
      let noResultsText = "No Results";
      if(searchText.length > 0){
        noResultsText += ` for "${searchText}"`
      }
      return <h3>{noResultsText}</h3>;
    }
    return <div>

              <List>
                <CommandsPagination page={page} lastPage={lastPage} setPage={setPage} />
                {products.map(product => {
                  return <CommandListItem key={product.id} itemClick={this.handleItemClick} product={product} />
                })}
                <CommandsPagination page={page} lastPage={lastPage} setPage={setPage} />
              </List>
              
           </div>;
  }
}