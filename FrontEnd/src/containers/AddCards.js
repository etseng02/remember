import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Button} from '../components/Button'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    cards: state.cards,
  }
}

class AddCards extends Component{

  constructor(props){
    super(props);
 
    this.state = {
       card: '',
       answer:''
    }
 }

 addCard = (card, answer, deck) => {
  this.props.dispatch({type:'ADD_CARD', card, answer, deck})
  this.setState({card:''})
  this.setState({answer:''})
}

  render(){

    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>{this.props.deck}: Add Card</Text>
        <TextInput
          onChangeText={(text)=> this.setState({card:text})}
          placeholder="Add a New Card Here!"
          style={Styles.input}
          value={this.state.card}
        />

        <TextInput
          onChangeText={(text)=> this.setState({answer:text})}
          placeholder="Add a New Card Answer Here!"
          style={Styles.input}
          value={this.state.answer}
        />
        <Button style={Styles.buttonConfirm} text={'Confirm'} onPress={()=> {this.addCard(this.state.card, this.state.answer, this.props.deck)}} />
        <Button style={Styles.buttonCancel} text={'Cancel'} onPress={() => this.props.navigation.goBack()} />

      </View>
    )
  }
}

export default connect(mapStateToProps)(AddCards);

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
  buttonCancel: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
  },
  container:{
    borderWidth: 1,
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: '$primaryColor'
  },
  title:{
    fontSize: 28,
    textAlign: 'center',
    color: '$primaryColor',

  },
});