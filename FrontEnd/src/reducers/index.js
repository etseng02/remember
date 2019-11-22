import {combineReducers} from 'redux'
import deckListReducer from './decklist'
import deckSelectReducer from './deckselect'
import cardReducer from './cards'



export default combineReducers({
  deckListReducer,
  deckSelectReducer,
})