export default deckListReducer = (state ={} , action) => {
  switch(action.type){
    case 'ADD_DECK':
      return {
        ...state, deckList: {...deckList}
      }
      default: return state;
  }
}