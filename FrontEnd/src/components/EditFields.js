import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import {Button} from './Button'
import EStyleSheet from 'react-native-extended-stylesheet'

class EditFields extends Component{

  constructor(props){
    super(props);
 
    this.state = {
       card: this.props.card || '',
       answer: this.props.answer || ''
    }
 }

 render(){
  return (
    <View>
        <Text style={Styles.text} >Card:</Text>
        <TextInput
          onChangeText={(text)=> this.setState({card:text})}
          placeholder="Add a New Card Here!"
          style={Styles.input}
          value={this.state.card}
        />
        <Text style={Styles.text} >Answer:</Text>
        <TextInput
          onChangeText={(text)=> this.setState({answer:text})}
          placeholder="Add a New Card Answer Here!"
          style={Styles.input}
          value={this.state.answer}
        />
        <Button
          style={Styles.buttonConfirm}
          text={'Submit Changes'}
          onPress={()=>{
            this.props.editCard(this.state.card, this.state.answer, this.props.prevCard, this.props.deck),
            this.props.navigation.goBack()}}
        />
        <Button
          style={Styles.buttonCancel}
          text={'Cancel'} onPress={() => this.props.navigation.goBack()}
        />

    </View>
    )
  }
}

export default EditFields

const Styles = EStyleSheet.create({
  input:{
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    padding: 10,
    height: 50,
    width: '80%',
    margin:10,
    borderRadius:10,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
  text:{
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    color: '$primaryNeutral',
    fontSize: '1.5 rem'
  }
});