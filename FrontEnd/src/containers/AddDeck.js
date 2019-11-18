import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

class AddDeck extends Component{
  render(){
    return(
      <View style={{flexDirection: 'row', marginHorizontal: 50 }}>
        <TextInput
          placeholder="Add a new Deck Here!"
          style={styles.input}

        />
      </View>
    )
  }
}

export default AddDeck;

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    padding: 10,
    height: 50,
    width: '100%',
    marginTop: 30,
    borderRadius: 10,
  }
});