import {connect} from 'react-redux'
import DeckListItems from '../components/DeckListItems'

const mapStateToProps = function(state) {
  return {
    decks: state.deckListReducer.deckList,
  }
}


mapDispatchToProps = dispatch => ({
  selectDeck: id => dispatch({type: 'SELECT_DECK', id})
})



export default connect(mapStateToProps, mapDispatchToProps)(DeckListItems)