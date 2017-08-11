import {connect} from 'react-redux';
import FavoritesListComponent from '../../components/StoreDemo/ProductFavoritesListPage';
import {ProductInterface} from '../../res/data/products';
import {removeProductFromFavorites} from '../../actions/storeDemo';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    products: state.favoriteProductIds.map(fid => state.products[fid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    removeFavorite: (product: ProductInterface) => {
      dispatch(removeProductFromFavorites(product.id));
    },
    itemClick: (product: ProductInterface) => {
       ownProps.history.push('/favorites/' + product.id);
    }
  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(FavoritesListComponent));