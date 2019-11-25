import {connect} from 'react-redux'
import Confirm from '../components/Confirm'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
  }
}


mapDispatchToProps = dispatch => ({
  deleteDeck: name => dispatch({type: 'DELETE_DECK', name})
})



export default connect(mapStateToProps, mapDispatchToProps)(Confirm)