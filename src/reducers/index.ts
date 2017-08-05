import {
  SET_PAGE_TITLE,
  SET_USER_PLATFORM,
  T2_APP_MESSAGE_CLEAR,
  T2_APP_MESSAGE_START,
  EULA_ACCEPTED,
  EULA_REJECTED
} from '../actions';
import {combineReducers} from 'redux';
//import {arrayPushUnique,arrayRemove} from './_helper';
import * as demoReducers from './storeDemo';



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

const defaultReducers = {
  user,
  view,
  settings
}

const reducer = combineReducers({
  ...demoReducers,
  ...defaultReducers
});

export default reducer;

