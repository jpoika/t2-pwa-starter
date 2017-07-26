import {defaultCommands, defaultCommandIds} from '../res/data/commands';

import {
  SET_PAGE_TITLE,
  SORT_HOSPITALS,
  FILTER_HOSPITALS,
  SET_USER_PLATFORM,
  ADD_HOSPITAL_FAVORITES,
  REMOVE_HOSPITAL_FAVORITES,
  T2_APP_MESSAGE_CLEAR,
  T2_APP_MESSAGE_START,
  EULA_ACCEPTED,
  EULA_REJECTED,
  SET_HOSPITAL_GEO_SORT_TEXT,
  SET_HOSPITALS_PAGE,
 // SORT_DEFAULT
} from '../actions';
import {combineReducers} from 'redux';
import {arrayPushUnique,arrayRemove} from './_helper';

const defaultFilters = {
  hospitals: {
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
  let newHospitals = null;
  switch (action.type) {
    case SORT_HOSPITALS:
      newHospitals = {...state.hospitals,sortBy: action.sortBy,sortDir: action.sortDir};
      state = {...state,hospitals: newHospitals};
      break;
    case FILTER_HOSPITALS:
      newHospitals = {...state.hospitals,filterText: action.text};
      state = {...state,hospitals: newHospitals};
      break;
    case SET_HOSPITAL_GEO_SORT_TEXT:
      newHospitals = {...state.hospitals,sortText: action.text};
      state = {...state,hospitals: newHospitals};
      break;
    case SET_HOSPITALS_PAGE:
      newHospitals = {...state.hospitals,currentPage: action.page};
      state = {...state,hospitals: newHospitals};
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

const hospitals = (state = defaultCommands, action) => {
  return state;
}

const hospitalIds = (state = defaultCommandIds, action) => {
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

const favoriteHospitalIds = (state = [], action) => {
  switch (action.type) {
    case ADD_HOSPITAL_FAVORITES:
      state = arrayPushUnique(action.id,state);
      break;
    case REMOVE_HOSPITAL_FAVORITES:
      state = arrayRemove(action.id,state);
      break;
  }
  return state;
}

const reducer = combineReducers({
  hospitals,
  hospitalIds,
  filters,
  favoriteHospitalIds,
  user,
  view,
  settings
});

export default reducer;

