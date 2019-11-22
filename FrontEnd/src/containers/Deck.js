import {connect} from 'react-redux'
import deckDetails from '../components/deckDetails'

const mapStateToProps = function(state) {
  return {
    deckName: state.deckSelectReducer.deck,
    deck: state.deckListReducer.deckList[state.deckSelectReducer.deck]
  }
}


mapDispatchToProps = dispatch => ({
  // selectDeck: id => dispatch({type: 'ADD_CARD', card, answer, id})
})



export default connect(mapStateToProps, mapDispatchToProps)(deckDetails)