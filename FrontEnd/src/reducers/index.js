import {combineReducers} from 'redux'
import deckListReducer from './decklist'
import deckSelectReducer from './deckselect'

export default combineReducers({
  deckListReducer,
  deckSelectReducer,
})