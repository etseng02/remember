import {connect} from 'react-redux'
import CardList from '../components/CardList'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    cards: state.decks.models[state.decks.current].cards,
  }
}


mapDispatchToProps = dispatch => ({
  deleteCard: (cardPosition, deck) => dispatch({type: 'DELETE_CARD', cardPosition, deck}),
  selectCard: (card, deck) => dispatch({type: 'SELECT_CARD', card, deck})
})



export default connect(mapStateToProps, mapDispatchToProps)(CardList)