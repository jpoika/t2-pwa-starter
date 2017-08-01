import {connect} from 'react-redux';
import ProductsListComponent from '../../components/StoreDemo/ProductsList';
import {ProductInterface} from '../../res/data/products';
import {withRouter} from 'react-router-dom';
import {getProductsAdvancedPaged, getProductSearchText,getProductPage,getProductsPageMax} from './selectors';
import {setProductPage} from '../../actions/storeDemo';

const stateToProps = (state,ownProps) => {
  return {
    products: getProductsAdvancedPaged(state),
    searchText: getProductSearchText(state),
    page: getProductPage(state),
    lastPage: getProductsPageMax(state)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (product: ProductInterface) => {
       ownProps.history.push('/products/' + product.id);
    },
    setPage: (pageIdx: number) => {
      dispatch(setProductPage(pageIdx));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(ProductsListComponent));