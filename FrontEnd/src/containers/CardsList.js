import {connect} from 'react-redux'
import CardListItems from '../components/CardListItems'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    cards: state.decks.models[state.decks.current].cards,
  }
}


mapDispatchToProps = dispatch => ({
  deleteCard: (card, deck) => dispatch({type: 'DELETE_CARD', card, deck}),
  selectCard: (card, deck) => dispatch({type: 'SELECT_CARD', card, deck})
})



export default connect(mapStateToProps, mapDispatchToProps)(CardListItems)