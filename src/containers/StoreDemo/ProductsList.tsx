import {connect} from 'react-redux';
import ProductsListComponent from '../../components/StoreDemo/ProductsList';
import {ProductInterface} from '../../res/data/products';
import {withRouter} from 'react-router-dom';
import {getProductsAdvancedPaged, getProductSearchText,getProductPage,getProductsPageMax} from './selectors';
import {setProductPage,removeProductFromFavorites,addProductToFavorites} from '../../actions/storeDemo';
interface FavoriteAble {
  isFavorite: boolean;
  id: number;
  [propName: string]: any
}

const calColumns = (state,ownProps) => {
  const width = ownProps.appPage.screen.width;
  if(width > 1200){

    return 6;
  }
  if(width > 600){
    return 4;
  }
  return 2;
}

const stateToProps = (state,ownProps) => {
  return {
    products: getProductsAdvancedPaged(state),
    searchText: getProductSearchText(state),
    page: getProductPage(state),
    lastPage: getProductsPageMax(state),
    cols: calColumns(state,ownProps)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (product: ProductInterface) => {
       ownProps.history.push(ownProps.basePath + '/products/' + product.id);
    },
    setPage: (pageIdx: number) => {
      dispatch(setProductPage(pageIdx));
    },
    toggleFavorite: (product: FavoriteAble) => {
      if(product.isFavorite){
        dispatch(removeProductFromFavorites(product.id));
      } else {
        dispatch(addProductToFavorites(product.id));
      }
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(ProductsListComponent));