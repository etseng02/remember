import {connect} from 'react-redux'
import DeckListItems from '../components/DeckListItems'

const mapStateToProps = function(state) {
  return {
    decks: state.deckListReducer.deckList,
  }
}


// mapDispatchToProps = dispatch => ({
//   toggleDeck: id => dispatch({type: 'TOGGLE_DECK', id})
// })



export default connect(mapStateToProps)(DeckListItems)