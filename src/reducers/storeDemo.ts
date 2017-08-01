import {defaultProducts, defaultProductIds} from '../res/data/products';

import {
  ADD_PRODUCTS_FAVORITES,
  REMOVE_PRODUCTS_FAVORITES,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  SET_PRODUCTS_PAGE
} from '../actions/storeDemo';

import {arrayPushUnique,arrayRemove} from './_helper';

const defaultFilters = {
  products: {
    sortBy: "default",
    sortDir: "asc",
    filterText: "",
    sortText: "",
    resultsMax: 10,
    currentPage: 0
  }
}


export const products = (state = defaultProducts, action) => {
  return state;
}

export const productIds = (state = defaultProductIds, action) => {
  return state;
}

export const filters = (state = defaultFilters, action) => {
  let newProducts = null;
  switch (action.type) {
    case SORT_PRODUCTS:
      newProducts = {...state.products,sortBy: action.sortBy,sortDir: action.sortDir};
      state = {...state,products: newProducts};
      break;
    case FILTER_PRODUCTS:
      newProducts = {...state.products,filterText: action.text};
      state = {...state,products: newProducts};
      break;
    case SET_PRODUCTS_PAGE:
      newProducts = {...state.products,currentPage: action.page};
      state = {...state,products: newProducts};
      break;
  }
  return state;
}


export const favoriteProductIds = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCTS_FAVORITES:
      state = arrayPushUnique(action.id,state);
      break;
    case REMOVE_PRODUCTS_FAVORITES:
      state = arrayRemove(action.id,state);
      break;
  }
  return state;
}
