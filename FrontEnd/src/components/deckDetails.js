import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'

const deckDetails = (props) => {

  return(
    <View>
      <Text style={Styles.deckTitle}>{props.deckName}</Text>
      <Text>Number of Cards: {props.deck.cards.length}</Text>
      <Button text="Add Card" onPress={() => {props.navigation.navigate('AddCard')}}/>
      <Button text="Enhanced Study"/>
      <Button text="Free Study"onPress={() => {props.navigation.navigate('FreeStudy')}}/>
    </View>
  )
}

export default deckDetails

const Styles = StyleSheet.create({
  deckTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  container:{
  }
})