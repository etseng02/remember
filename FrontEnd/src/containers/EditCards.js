import {connect} from 'react-redux'
import CardListItems from '../components/CardListItems'

const mapStateToProps = function(state) {
  return {
    deckName: state.decks.current,
    cards: state.decks.models[state.decks.current].cards
  }
}


mapDispatchToProps = dispatch => ({
  selectDeck: name => dispatch({type: 'SELECT_DECK', name})
})



export default connect(mapStateToProps, mapDispatchToProps)(CardListItems)