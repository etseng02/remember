import {connect} from 'react-redux'
import Confirm from '../components/Confirm'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    cards: state.decks.models[state.decks.current].cards,
  }
}


mapDispatchToProps = dispatch => ({
  deleteDeck: name => dispatch({type: 'DELETE_DECK', name})
})



export default connect(mapStateToProps, mapDispatchToProps)(Confirm)