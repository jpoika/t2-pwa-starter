import {connect} from 'react-redux';
import FavoritesListComponent from '../../components/StoreDemo/ProductFavoritesListPage';
import {CommandInterface} from '../../res/data/commands';
import {removeProductFromFavorites} from '../../actions';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    products: state.favoriteProductIds.map(fid => state.products[fid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    removeFavorite: (product: CommandInterface) => {
      dispatch(removeProductFromFavorites(product.id));
    },
    itemClick: (product: CommandInterface) => {
       ownProps.history.push('/favorites/' + product.id);
    }
  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(FavoritesListComponent));