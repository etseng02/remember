import {connect} from 'react-redux'
import EditFields from '../components/EditFields'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    prevCard: state.decks.card,
    card: state.decks.card[0],
    answer: state.decks.card[1]
  }
}


mapDispatchToProps = dispatch => ({
  editCard: (card, answer, prevCard, deck) => dispatch({type: 'EDIT_CARD', card, answer, prevCard, deck})
})



export default connect(mapStateToProps, mapDispatchToProps)(EditFields)