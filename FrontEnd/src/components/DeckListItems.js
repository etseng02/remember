import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import Swipeable from 'react-native-gesture-handler/Swipeable';



const DeckListItems = (props) => {

  let key = 0

  const RightActions = (deck) => {
    return(
      <TouchableOpacity
      style={Styles.deleteDeck}
      onPress={() => {props.selectDeck(deck.name), props.navigation.navigate('DeleteConfirm')}}>
        <View >
            <Text>Delete Item</Text>
        </View>
      </TouchableOpacity>
    )
  }

  
  return(
    <View>
      <Text style={Styles.deckListTitle}>Deck List</Text>
      {
        props.decks.map(deck => {
          return (
            <Swipeable
              key ={key++}
              renderRightActions={() => <RightActions name={deck}/>}
            >
              <View style={Styles.ListItem}>
                <TouchableOpacity onPress={() => {props.selectDeck(deck), props.navigation.navigate('DeckView')}}>
                  <Text style={Styles.deckItem}>{deck}</Text>
                </TouchableOpacity>
              </View>
          </Swipeable>)
        })}
    </View>
  )
}

export default DeckListItems

const Styles = StyleSheet.create({
  deckListTitle: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  deckItem: {
    width: '100%',
    fontSize: 24,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    zIndex: 1,

  },
  ListItem: {
    zIndex: 1,
    backgroundColor: 'white',
  },
  deleteDeck: {
    color: 'white',
    backgroundColor: 'red',
    zIndex: 0
  },


})