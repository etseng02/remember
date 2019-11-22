import {connect} from 'react-redux'
import DeckListItems from '../components/DeckListItems'

const mapStateToProps = function(state) {
  return {
    decks: Object.keys(state.deckListReducer.deckList)
  }
}


mapDispatchToProps = dispatch => ({
  selectDeck: name => dispatch({type: 'SELECT_DECK', name})
})



export default connect(mapStateToProps, mapDispatchToProps)(DeckListItems)