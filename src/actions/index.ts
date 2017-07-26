//import {nextId} from './_helper';

export const ADD_HOSPITAL_FAVORITES = 'T2.ADD_HOSPITAL_FAVORITES';
export const REMOVE_HOSPITAL_FAVORITES = 'T2.REMOVE_HOSPITAL_FAVORITES';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';
export const SORT_HOSPITALS = 'T2.SORT_HOSPITALS';
export const FILTER_HOSPITALS = 'T2.FILTER_HOSPITALS';
export const SET_USER_PLATFORM = 'T2.SET_USER_PLATFORM';
export const T2_APP_MESSAGE_START = 'T2.APP_MESSAGE_START';
export const T2_APP_MESSAGE_CLEAR = 'T2.APP_MESSAGE_CLEAR';
export const EULA_ACCEPTED = 'T2.EULA_ACCEPTED';
export const EULA_REJECTED = 'T2.EULA_REJECTED';
export const SET_HOSPITAL_GEO_SORT_TEXT = 'T2.SET_HOSPITAL_GEO_SORT_TEXT';
export const UNWATCH_CURRENT_LOCATION = 'T2.UNWATCH_CURRENT_LOCATION';
export const SET_HOSPITALS_PAGE = 'T2.SET_HOSPITALS_PAGE';


export const SORT_ALPHABETICAL = 'default';
export const SORT_DEFAULT = 'default';
export const SORT_LOCATION = 'current_location';


export const setHospitalPage = (page: number) => {
  return {
    type: SET_HOSPITALS_PAGE,
    page
  }
}


export const eulaAccepted = () => {
  return {
    type: EULA_ACCEPTED
  }
}

export const setHospitalGeoSortText = (text: string) => {
  return {
    type: SET_HOSPITAL_GEO_SORT_TEXT,
    text
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

export const sortHospitals = (sortBy: string, sortDir = 'asc') => {
  return {
    type: SORT_HOSPITALS,
    sortBy,
    sortDir
  }
}

export const searchHospitals = (text: string) => {
  return (dispatch,getState,extraArgs) => {
      //search change pagination so must reset page on
      // any action which filters results
      dispatch(setHospitalPage(0)); 
      dispatch(searchHospitalText(text));
  }
}

export const searchHospitalText= (text: string) => {
  return {
    type: FILTER_HOSPITALS,
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

export const addHospitalToFavorites = (hospitalId:number) => {
  return {
    type: ADD_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const removeHospitalFromFavorites = (hospitalId:number) => {
  return {
    type: REMOVE_HOSPITAL_FAVORITES,
    id: hospitalId
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

