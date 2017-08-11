import * as React from 'react';
import {ProductInterface} from '../../res/data/products';
import {AppPageInterface} from '../Main';
import FavoriteCheckbox from '../FavoriteCheckBox';
import ProductContextMenu from './ProductContextMenu';
import {Card, /*CardActions, CardHeader,*/ CardMedia, CardTitle, CardText} from 'material-ui/Card';


export interface Props {
  product: ProductInterface;
  appPage: AppPageInterface;
  isFavorite: boolean;
  toggleFavorite: (product: ProductInterface, isFavorite:boolean) => void;
}

export interface State {

}

export default class ProductDetails extends React.Component<Props, State>{

  componentWillMount(){
      const {product,appPage} = this.props;
      appPage.setPageTitle(product.title);
      this.props.appPage.setRightIcon(<ProductContextMenu />);
      //this.props.appPage.setTabs([]);
  }

  handleSetToggle = () => {
    const {toggleFavorite,isFavorite,product,appPage} = this.props;
    return () => {
      const favMessage = isFavorite ? "Removed Favorite" : "Added Favorite";
      appPage.sendMessage(favMessage);
      toggleFavorite(product,isFavorite);
    }
  }

  render(){
    const {product,isFavorite} = this.props;

   
    return   <Card style={{maxWidth: 500,margin: '0px auto 0px auto'}}>
    <CardMedia
      overlay={<CardTitle title={<div>${product.price}

        <div style={{position: 'absolute',top: 10, right: 0}}>
          <FavoriteCheckbox toggleFavorite={this.handleSetToggle()} checked={isFavorite} />
        </div>
      </div>}  />}
    >
      <img  src={product.image} alt="" />
    </CardMedia>
    <CardTitle title={product.title} subtitle="By ACME" />
    <CardText>
        <div>{product.description}</div>
        
    </CardText>
  </Card>
  }
}

