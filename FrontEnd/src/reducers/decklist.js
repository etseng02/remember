let deckID = 0

export default deckListReducer = (state ={deckList:[]} , action) => {
  switch(action.type){
    case 'ADD_DECK':
      return {
        ...state, deckList: [ ...state.deckList, {key: deckID++, deckName: action.text, cards: []}]
      }
      default: return state;
  }
}