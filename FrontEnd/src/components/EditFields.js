import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import {Button} from './Button'

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
        <Text>Card:</Text>
        <TextInput
          onChangeText={(text)=> this.setState({card:text})}
          placeholder="Add a New Card Here!"
          style={styles.input}
          value={this.state.card}
        />
        <Text>Answer:</Text>
        <TextInput
          onChangeText={(text)=> this.setState({answer:text})}
          placeholder="Add a New Card Answer Here!"
          style={styles.input}
          value={this.state.answer}
        />
        <Button text={'Submit Changes'} onPress={()=>{this.props.editCard(this.state.card, this.state.answer, this.props.prevCard, this.props.deck), this.props.navigation.goBack()}}/>

    </View>
    )
  }
}

export default EditFields

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