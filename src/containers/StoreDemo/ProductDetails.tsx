import {connect} from 'react-redux';
import CommandDetailsComponent from '../../components/StoreDemo/ProductDetails';
import {withRouter} from 'react-router-dom';
import {CommandInterface} from '../../res/data/commands';
import {isProductFavorite} from '../_helper';
import {sendMessage} from '../../actions';
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
    toggleFavorite: (product: CommandInterface, isFavorite: boolean) => {
      if(isFavorite){
        dispatch(removeProductFromFavorites(product.id));
      } else {
        dispatch(addProductToFavorites(product.id));
      }
    },
    sendMessage: (message: string) => {

      dispatch(sendMessage(message));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandDetailsComponent));