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
      //console.log("dat the card", action.card)
      //console.log("DATS THE STATE:", state[action.deck].cards)
      // console.log ("ACTION.CARD",action.card.card)
      let newArray = state[action.deck].cards.filter(card => card[0] !== action.card[0] && card[1] !== action.card[1])
      console.log(newArray)
      return {
        ...state, [action.deck]:{cards: newArray }
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