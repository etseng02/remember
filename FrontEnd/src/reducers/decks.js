import { combineReducers } from "redux";

const initialState = {
  models: {},
  current: null,
}

const models = (state = initialState.models , action) => {
  switch(action.type){
    case 'ADD_DECK':
      return {
        ...state, 
        [action.text]: {
          cards: [],
        }
      }
    case 'DELETE_DECK':
        console.log("dat the name",action.name)
        console.log("dat the state",state[action.name])
        delete state[action.name]
        return {
          ...state, 
        }
    case 'ADD_CARD':
      return {
        ...state,
        [action.deck]: {
          cards: [...state[action.deck].cards, [action.card, action.answer]]
        }
      }
    case 'DELETE_CARD':
      return {
        ...state,
        [action.deck]: {
          cards: [...state[action.deck].cards, [action.card, action.answer]]
        }
      }
    default:
      return state;
  }
}

const current = (state = initialState.current , action) => {
  switch(action.type){
      case 'SELECT_DECK':
        return action.name
      case 'DELETE_DECK':
          return null
      default: return state;
  }

}

export default combineReducers({ models, current })