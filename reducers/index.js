import { combineReducers } from 'redux'
import tabs from './tabs'
import content from './content'

const tabsApp = combineReducers({
  tabs,
  content
})

export default tabsApp