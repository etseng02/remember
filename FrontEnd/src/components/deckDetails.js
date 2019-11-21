import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'

//const DeckListItems = ({decks=[], selectDeck}) => {
const deckDetails = (props) => {

  // console.log(props.navigation)

  return(
    <View>
      <Text style={Styles.deckTitle}>{props.deck.deckName}</Text>
      <Text>Number of Cards: {props.deck.cards.length}</Text>
      <Button text="Add Card" onPress={() => {props.navigation.navigate('AddCard')}}/>
      <Button text="Study"/>
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