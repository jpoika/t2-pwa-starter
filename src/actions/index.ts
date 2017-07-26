//import {nextId} from './_helper';

export const ADD_PRODUCTS_FAVORITES = 'T2.ADD_PRODUCTS_FAVORITES';
export const REMOVE_PRODUCTS_FAVORITES = 'T2.REMOVE_PRODUCTS_FAVORITES';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';
export const SORT_PRODUCTS = 'T2.SORT_PRODUCTS';
export const FILTER_PRODUCTS = 'T2.FILTER_PRODUCTS';
export const SET_USER_PLATFORM = 'T2.SET_USER_PLATFORM';
export const T2_APP_MESSAGE_START = 'T2.APP_MESSAGE_START';
export const T2_APP_MESSAGE_CLEAR = 'T2.APP_MESSAGE_CLEAR';
export const EULA_ACCEPTED = 'T2.EULA_ACCEPTED';
export const EULA_REJECTED = 'T2.EULA_REJECTED';
export const SET_PRODUCTS_PAGE = 'T2.SET_PRODUCTS_PAGE';


export const SORT_ALPHABETICAL = 'default';
export const SORT_DEFAULT = 'default';
export const SORT_LOCATION = 'current_location';


export const setProductPage = (page: number) => {
  return {
    type: SET_PRODUCTS_PAGE,
    page
  }
}


export const eulaAccepted = () => {
  return {
    type: EULA_ACCEPTED
  }
}

export const eulaRejected = () => {
  const localAction = {
    type: EULA_REJECTED
  }

  return (dispatch,getState,extraArgs) => {
    dispatch(localAction);
    if(extraArgs.platform.toLowerCase() === 'android'){
      (window as any).navigator.app.exitApp();
    }
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


export const setUserPlatform = (platform: string) => {
  return {
    type: SET_USER_PLATFORM,
    platform
  }
}

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
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

export const messageStart = (message) => {
  return {
    type: T2_APP_MESSAGE_START,
    message
  };
}

export const messageClear = () => {
  return {
    type: T2_APP_MESSAGE_CLEAR
  };
}


var timeOutId = null
export const sendMessage = (message) => {
  
  return (dispatch,getState,extraArgs) => {
    console.log(extraArgs);
    dispatch(messageStart(message));

    if(timeOutId){
        clearTimeout(timeOutId)
    }
    
    timeOutId = setTimeout(
                    () => {dispatch(messageClear())}
                    ,3000
                )
  }
};

