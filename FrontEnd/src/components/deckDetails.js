import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'
import EStyleSheet from 'react-native-extended-stylesheet'

const deckDetails = (props) => {

  return(
    <View>
      <Text style={Styles.deckTitle}>{props.deckName}</Text>
      <Text style={Styles.details}>Number of Cards: {props.deck.cards.length}</Text>
      <Button text="Add Card" onPress={() => {props.navigation.navigate('AddCard')}}/>
      <Button text="Enhanced Study"/>
      <Button text="Free Study"onPress={() => {props.navigation.navigate('FreeStudy')}}/>
      <Button text="Edit Cards"onPress={() => {props.navigation.navigate('CardsList')}}/>
    </View>
  )
}

export default deckDetails

const Styles = EStyleSheet.create({
  deckTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
    color: "$primaryNeutral"
  },
  details:{
    color: "$primaryNeutral"
  }
})