export const ADD_PRODUCTS_FAVORITES = 'T2.ADD_PRODUCTS_FAVORITES';
export const REMOVE_PRODUCTS_FAVORITES = 'T2.REMOVE_PRODUCTS_FAVORITES';
export const SORT_PRODUCTS = 'T2.SORT_PRODUCTS';
export const FILTER_PRODUCTS = 'T2.FILTER_PRODUCTS';
export const SET_PRODUCTS_PAGE = 'T2.SET_PRODUCTS_PAGE';

export const setProductPage = (page: number) => {
  return {
    type: SET_PRODUCTS_PAGE,
    page
  }
}


export const sortProducts = (sortBy: string, sortDir = 'asc') => {
  return {
    type: SORT_PRODUCTS,
    sortBy,
    sortDir
  }
}

export const searchProducts = (text: string) => {
  return (dispatch,getState,extraArgs) => {
      //search change pagination so must reset page on
      // any action which filters results
      dispatch(setProductPage(0)); 
      dispatch(searchProductText(text));
  }
}

export const searchProductText= (text: string) => {
  return {
    type: FILTER_PRODUCTS,
    text
  }
}

export const addProductToFavorites = (productId:number) => {
  return {
    type: ADD_PRODUCTS_FAVORITES,
    id: productId
  }
}

export const removeProductFromFavorites = (productId:number) => {
  return {
    type: REMOVE_PRODUCTS_FAVORITES,
    id: productId
  }
}