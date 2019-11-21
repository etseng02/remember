import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class AddCards extends Component{

  constructor(props){
    super(props);
 
    this.state = {
       text: '',
    }
 }

  render(){
    return(
      <View style={{flexDirection: 'row', marginHorizontal: 50 }}>
        <TextInput
          onChangeText={(text)=> this.setState({text})}
          placeholder="Add a New Card Here!"
          style={styles.input}
          value={this.state.text}
        />
        <TouchableOpacity onPress={()=> console.log("Add Card!")}>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCards);

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