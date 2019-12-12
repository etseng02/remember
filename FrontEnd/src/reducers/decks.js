import { combineReducers } from "redux";

const initialState = {
  models: {},
  current: null,
  card: null,
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
      console.log("Delete card: ",action.cardPosition, action.deck)
      state[action.deck].cards.splice(action.cardPosition, 1,)
    case 'EDIT_CARD':
      // console.log("card", action.card)
      // console.log("answer", action.answer)
      // console.log("prev card index", action.prevCard)
      // console.log("deck", action.deck)
      state[action.deck].cards.splice(action.prevCard, 1, [action.card, action.answer])
      
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

const card = (state = initialState.current , action) => {
  switch(action.type){
    case 'SELECT_CARD':
      return action.card
    default: return state;
  }
}

export default combineReducers({ models, current, card })