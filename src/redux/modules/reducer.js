import { combineReducers } from 'redux'

import user from './user'
import auth from './auth'
import info from './info'

export default combineReducers({
  user,
  auth,
  info
})
