import {connect} from 'react-redux';
import CommandProductsComponent from '../components/CommandsList';
import {CommandInterface} from '../res/data/commands';
import {withRouter} from 'react-router-dom';
import {getProductsAdvancedPaged, getProductSearchText,getProductPage,getProductsPageMax} from './selectors';
import {setProductPage} from '../actions';

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
    itemClick: (product: CommandInterface) => {
       ownProps.history.push('/commands/' + product.id);
    },
    setPage: (pageIdx: number) => {
      dispatch(setProductPage(pageIdx));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandProductsComponent));