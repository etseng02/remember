import {connect} from 'react-redux'
import deckDetails from '../components/deckDetails'

const mapStateToProps = function(state) {
  return {
    deckName: state.decks.current,
    deck: state.decks.models[state.decks.current]
  }
}


mapDispatchToProps = dispatch => ({
})



export default connect(mapStateToProps, mapDispatchToProps)(deckDetails)