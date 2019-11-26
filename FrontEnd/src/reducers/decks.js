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
      let newArray = state[action.deck].cards.filter(card => card[0] !== action.card[0] && card[1] !== action.card[1])
      return {
        ...state, [action.deck]:{cards: newArray }
        }
    case 'EDIT_CARD':
      console.log("card", action.card)
      console.log("answer", action.answer)
      console.log("prev", action.prevCard)
      console.log("deck", action.deck)
      let index = state[action.deck].cards.indexOf(action.prevCard)
      console.log(index)
      state[action.deck].cards.splice(index, 1, [action.card, action.answer])
      return {...state}
        
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