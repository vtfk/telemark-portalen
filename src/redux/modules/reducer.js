import { combineReducers } from 'redux'

import user from './user'
import auth from './auth'
import messages from './messages'
import search from './search'
import info from './info'

export default combineReducers({
  user,
  messages,
  search,
  info,
  auth
})
