import {connect} from 'react-redux'
import deckDetails from '../components/deckDetails'

const mapStateToProps = function(state) {
  return {
    deckName: state.deckSelectReducer.deck,
    deck: state.deckListReducer.deckList[state.deckSelectReducer.deck]
  }
}


mapDispatchToProps = dispatch => ({
})



export default connect(mapStateToProps, mapDispatchToProps)(deckDetails)