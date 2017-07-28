import {connect} from 'react-redux';
import CommandDetailsComponent from '../../components/StoreDemo/ProductDetailsPage';
import {withRouter} from 'react-router-dom';
import {CommandInterface} from '../../res/data/commands';
import {isProductFavorite} from '../_helper';
import {addProductToFavorites,removeProductFromFavorites,sendMessage} from '../../actions'

const stateToProps = (state,ownProps) => {
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