import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

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
      <View style={{flexDirection: 'column', marginHorizontal: 50 }}>
        <TextInput
          onChangeText={(text)=> this.setState({card:text})}
          placeholder="Add a New Card Here!"
          style={styles.input}
          value={this.state.card}
        />

        <TextInput
          onChangeText={(text)=> this.setState({answer:text})}
          placeholder="Add a New Card Answer Here!"
          style={styles.input}
          value={this.state.answer}
        />
        <TouchableOpacity onPress={()=> {this.addCard(this.state.card, this.state.answer, this.props.deck)}}>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(mapStateToProps)(AddCards);

const styles = StyleSheet.create({
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
  addButton:{
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    padding: 5,
    height: 50,
    width: '100%',
    marginTop: 30,
    marginLeft: 0,
  }
});