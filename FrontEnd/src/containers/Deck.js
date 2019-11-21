import {connect} from 'react-redux'
import deckDetails from '../components/deckDetails'

const mapStateToProps = function(state) {
  return {
    deck: state.deckListReducer.deckList[state.deckSelectReducer.deck]
  }
}


mapDispatchToProps = dispatch => ({
  // selectDeck: id => dispatch({type: 'SELECT_DECK', id})
})



export default connect(mapStateToProps, mapDispatchToProps)(deckDetails)