import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {Button} from '../components/Button'
import EStyleSheet from 'react-native-extended-stylesheet'


class AddDeck extends Component{

  constructor(props){
    super(props);
 
    this.state = {
       text: '',
    }
 }

  addDeck = (text) => {
    this.props.dispatch({type:'ADD_DECK', text})
    this.setState({text:''})
  }


  render(){
    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Add Deck</Text>
        <TextInput
          onChangeText={(text)=> this.setState({text})}
          placeholder="Type in the new deck name here!"
          style={Styles.input}
          value={this.state.text}
        />
        <Button style={Styles.buttonConfirm} text={'Confirm'} onPress={()=>{this.addDeck(this.state.text), this.props.navigation.goBack()}} />
        <Button style={Styles.buttonCancel} text={'Cancel'} onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

export default connect()(AddDeck);

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
    borderWidth: 3,
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: '$primaryColor',
    backgroundColor: '$primaryBackground'
  },
  title:{
    fontSize: 28,
    textAlign: 'center',
    color: '$primaryNeutral',

  },
});