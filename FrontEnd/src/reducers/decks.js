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
      default: return state;
  }
}

export default combineReducers({ models, current })