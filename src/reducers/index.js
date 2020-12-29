import { combineReducers } from 'redux'

import ajaxReducer from './ajax'
import profileReducer from './profile'

export default combineReducers({
  ajaxReducer,
  profileReducer
})