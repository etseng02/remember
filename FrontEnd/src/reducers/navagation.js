export default navagationReducer = (state ={view:'VIEW_DECKLIST'} , action) => {
  switch(action.type){
    case 'VIEW_DECKLIST':
      return {
        ...state, view:'DECKLIST'
      }
    case 'VIEW_DECK':
      return{
        ...state, view:'DECK'
      }
      default: return state;
  }
}