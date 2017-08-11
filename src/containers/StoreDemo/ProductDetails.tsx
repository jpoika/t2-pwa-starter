import {connect} from 'react-redux';
import CommandDetailsComponent from '../../components/StoreDemo/ProductDetails';
import {withRouter} from 'react-router-dom';
import {ProductInterface} from '../../res/data/products';
import {isProductFavorite} from '../_helper';
import {addProductToFavorites,removeProductFromFavorites} from '../../actions/storeDemo'

interface OwnPropsInterface{
  match: {params: {id: number|string}}
}

const stateToProps = (state,ownProps: OwnPropsInterface) => {
  const product = state.products[ownProps.match.params.id];
  return {
    product: product,
    isFavorite: isProductFavorite(product,state.favoriteProductIds)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    toggleFavorite: (product: ProductInterface, isFavorite: boolean) => {
      if(isFavorite){
        dispatch(removeProductFromFavorites(product.id));
      } else {
        dispatch(addProductToFavorites(product.id));
      }
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandDetailsComponent));