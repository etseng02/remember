let deckID = 0

export default deckListReducer = (state ={deckList:{}} , action) => {
  switch(action.type){
    case 'ADD_DECK':
      return {
        // ...state, deckList: [ ...state.deckList, {key: deckID++, deckName: action.text, cards: []}]
        ...state, deckList: {...state.deckList, [action.text]:{cards:[]} }
      }
    case 'ADD_CARD':
      return {...state, deckList:{...state.deckList, [action.deck]:{cards:[...state.deckList[action.deck].cards, [action.card, action.answer]]}}}
      default: return state;
  }
}