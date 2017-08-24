/**
 * @file reducers/index.ts
 * Reducer variables and functions.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
import {
  SET_PAGE_TITLE,
  SET_USER_PLATFORM,
  T2_APP_MESSAGE_CLEAR,
  T2_APP_MESSAGE_START,
  EULA_ACCEPTED,
  EULA_REJECTED
} from '../actions';
import {combineReducers} from 'redux';
import * as demoReducers from './storeDemo';

import * as adAppReducers from './adApp';



const defaultUser = {
  platform: 'unknown'
}

const defaultSettings = {
  eulaAccepted: false
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
  ...defaultReducers,
  ...adAppReducers
});

export default reducer;
