import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

//const DeckListItems = ({decks=[], selectDeck}) => {
const deckDetails = (props) => {

  // console.log(props.navigation)

  return(
    <View>
      <Text >{props.deck.deckName}</Text>
    </View>
  )
}

export default deckDetails