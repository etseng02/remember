import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import CardView from '../components/CardView'
import {Button} from '../components/Button'
import DeckTitleHeader from '../components/DeckTitleHeader'
import EStyleSheet from 'react-native-extended-stylesheet'

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
       phase: 'question',
       answer: '',
       cycles: 0,
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
    let newCard = this.state.cardsQueue[0]
    let newArray = this.state.cardsQueue
    newArray.shift()
    this.setState({...this.state, phase:'question', currentCard: newCard, cardsQueue: newArray, answer: '' })
 }

 submitAnswer = () => {
  if (this.state.cardsQueue.length === 0) {
    let newOrder = this.generateQueue()
    // newOrder.shift()
    this.setState({...this.state, cardsQueue: newOrder, phase:'answer', cycles: this.state.cycles+1 })
  }

 }


  render(){
    return(
      <View >
        <DeckTitleHeader text ={this.props.deck + " Free Study"}/>
        <Text style={Styles.answerText}>All Cards Reviewed {this.state.cycles} Times</Text>

        <CardView card={this.state.currentCard[0]}/>

        {this.state.phase === 'question'? 
          <TextInput
            onChangeText={(text)=> this.setState({answer:text})}
            placeholder="Enter your Answer Here!"
            style={Styles.input}
            value={this.state.answer}
          />: null
        }

        {this.state.phase === 'question'?
          <Button
            style={Styles.buttonConfirm}
            text={'Submit Answer'}
            onPress={()=> {this.setState({...this.state, phase:'answer'}), this.submitAnswer() }
          }/>: null 
        }

        {this.state.phase === 'answer'? 
          <Text style={Styles.answerText}>{this.state.currentCard[1]}</Text>:null
        }
        
        {this.state.phase === 'answer'?
          <Button 
            style ={Styles.buttonSubmit}
            text={'Next Question'}
            onPress={()=> this.nextQuestion() }
          />: null
        }

      </View>
    )
  }
}

export default connect(mapStateToProps)(FreeStudy);

const Styles = EStyleSheet.create({
  input:{
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    padding: 10,
    height: 50,
    width: '100%',
    margin:10,
    borderRadius:10,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '20 rem'
  },
  buttonConfirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '$primaryColor',
    borderColor: '$primaryColor',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonSubmit: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '$primaryColor',
    borderColor: '$primaryColor',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  answerText:{
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '$primaryNeutral'
  }

});