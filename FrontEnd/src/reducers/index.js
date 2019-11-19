import {combineReducers} from 'redux'
import deckListReducer from './decklist'
import navagationReducer from './navagation'



export default combineReducers({
  deckListReducer,
  navagationReducer
})