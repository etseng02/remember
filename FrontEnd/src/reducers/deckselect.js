export default deckSelectReducer = (state ={deck:null} , action) => {
  switch(action.type){
      case 'SELECT_DECK':
        return {
          ...state, deck: action.id
        }
      default: return state;
  }
}