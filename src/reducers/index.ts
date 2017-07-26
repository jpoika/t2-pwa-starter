import {defaultProducts, defaultProductIds} from '../res/data/products';

import {
  SET_PAGE_TITLE,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  SET_USER_PLATFORM,
  ADD_PRODUCTS_FAVORITES,
  REMOVE_PRODUCTS_FAVORITES,
  T2_APP_MESSAGE_CLEAR,
  T2_APP_MESSAGE_START,
  EULA_ACCEPTED,
  EULA_REJECTED,
  SET_PRODUCTS_PAGE,
 // SORT_DEFAULT
} from '../actions';
import {combineReducers} from 'redux';
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

const defaultUser = {
  platform: 'unknown'
}

const defaultSettings = {
  eulaAccepted: false
  // permissions: {
  //   location: false
  // }
}

const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: ''
  },
  flash: {
    message: '',
    open: false
  }
}

const filters = (state = defaultFilters, action) => {
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


//Do not persist
const user = (state = defaultUser, action) => {
  switch(action.type){
    case SET_USER_PLATFORM:
      state = {...state,platform: action.platform}
      break;
  }
  return state;
}

// const permissions = (state,action) => {
//   switch(action.type){
//     case SET_USER_PERMISSION_LOCATION:
//       state = {...state,location: action.granted}
//       break;
//   }
//   return state;
// }

const settings = (state = defaultSettings,action) => {
  switch(action.type){
    case EULA_ACCEPTED:
      state = {...state, eulaAccepted: true};
      break;
    case EULA_REJECTED:
      state = {...state, eulaAccepted: false};
      break;
  }
  return state;
}

const products = (state = defaultProducts, action) => {
  return state;
}

const productIds = (state = defaultProductIds, action) => {
  return state;
}


const view = (state = defaultView, action) => {
  switch (action.type) {
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
    case T2_APP_MESSAGE_START:
      state = {...state,flash: {message: action.message, open: true}};
      break;
    case T2_APP_MESSAGE_CLEAR:
      state = {...state,flash: {message: '', open: false}};
      break;
  }
  return state;
}

const favoriteProductIds = (state = [], action) => {
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

const reducer = combineReducers({
  products,
  productIds,
  filters,
  favoriteProductIds,
  user,
  view,
  settings
});

export default reducer;

