import * as React from 'react';
import {ProductInterface} from '../../res/data/products';

import {ListItem} from 'material-ui/List';

export interface Props {
  product: ProductInterface;
  itemClick(product: ProductInterface);
}

export interface State {

}

export default class CommandItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  handleItemClick = (event) => {
    const {itemClick,product} = this.props;
    itemClick(product);
  }
  render(){
    const {product} = this.props;
    let distanceString = '';

    return <ListItem 
            onTouchTap={this.handleItemClick}   
            primaryText={product.title} 
            secondaryText={distanceString}
            />
  }
}

