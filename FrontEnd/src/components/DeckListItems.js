import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import { withNavigation } from 'react-navigation';

//const DeckListItems = ({decks=[], selectDeck}) => {
const DeckListItems = (props) => {

  // console.log(props.navigation)

  return(
    <View>
      <Text style={styles.deckListTitle}>Deck List</Text>
      {
        props.decks.map(deck => {
          return (<View>
            {/* <TouchableOpacity id={deck.key} onPress={() => {selectDeck(deck.key)}}> */}
            <TouchableOpacity id={deck.key} onPress={() => {props.selectDeck(deck.key),props.navigation.navigate('DeckView')}}>
              <Text style={styles.deckItem}>{deck.deckName}</Text>
            </TouchableOpacity>
          </View>)
        })}
    </View>
  )
}

export default DeckListItems

const styles = StyleSheet.create({
  deckListTitle: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  deckItem: {
    width: '80%',
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 5,

  }
})