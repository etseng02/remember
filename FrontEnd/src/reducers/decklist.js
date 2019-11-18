export default deckListReducer = (state ={deckList:[]} , action) => {
  switch(action.type){
    case 'ADD_DECK':
      return {
        ...state, deckList: [ ...state.deckList, {deckName: action.text, cards: []}]
      }
      default: return state;
  }
}