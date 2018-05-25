import { combineReducers } from 'redux';

import cheeseReducer from './cheeseReducer';

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  cheeseReducer,
  form: formReducer
})

export default rootReducer;