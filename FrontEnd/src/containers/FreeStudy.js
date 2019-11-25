import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import CardView from '../components/CardView'
import {Button} from '../components/Button'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    cards: state.decks.models[state.decks.current].cards
  }
}

class FreeStudy extends Component{

  constructor(props){
    super(props);
 
    this.state = {
       cardsQueue: [],
       currentCard: [],
       phase: 'question'
    }
 }

 generateQueue = () => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  NewArrayQueueChecker = (number) => {
    if (newArrayQueue.includes(number)){
      tempNumber = getRandomInt(this.props.cards.length)
      NewArrayQueueChecker(tempNumber)
    } else
    newArrayQueue.push(number)
  }

  let tempNumber = 0;
  let newArrayQueue = []
  let newArray = []
  for (i = 0; i < this.props.cards.length; i++){
    tempNumber = getRandomInt(this.props.cards.length)
    NewArrayQueueChecker(tempNumber)
  }

  newArrayQueue.forEach((number) => {
    newArray.push(this.props.cards[number])
  })
  return newArray
 }

 


 componentDidMount = () => {
  let newOrder = this.generateQueue()
  let firstCard = newOrder[0]
  newOrder.shift()
  this.setState({...this.state, cardsQueue: newOrder, currentCard: firstCard})
 }

 nextQuestion = () => {

  if (this.state.cardsQueue.length === 0) {
    let newOrder = this.generateQueue()
    let firstCard = newOrder[0]
    newOrder.shift()
    this.setState({...this.state, cardsQueue: newOrder, currentCard: firstCard})
  } else {
    let newCard = this.state.cardsQueue[0]
    let newArray = this.state.cardsQueue
    newArray.shift()
    this.setState({...this.state, phase:'question', currentCard: newCard, cardsQueue: newArray })
  }

 }


  render(){
    return(
      <View >
        <Text style={Styles.deckTitle}>{this.props.deck}</Text>
        <CardView card={this.state.currentCard[0]}/>
        {this.state.phase === 'question'? <Button text={'Submit Answer'} onPress={()=> this.setState({...this.state, phase:'answer'}) }/>: null }
        {this.state.phase === 'answer'? <Text>{this.state.currentCard[1]}</Text>: null }
        {this.state.phase === 'answer'? <Button text={'Next Question'} onPress={()=> this.nextQuestion() }/>: null }
      </View>
    )
  }
}

export default connect(mapStateToProps)(FreeStudy);

const Styles = StyleSheet.create({
  input:{
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    padding: 10,
    height: 50,
    width: '100%',
    marginTop: 30,
    marginRight: 0,
  },
  deckTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
});