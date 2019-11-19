import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const DeckListItems = ({decks=[]}) => {

  return(
    <View>
      <Text style={styles.deckListTitle}>Deck List</Text>
      {
        decks.map(deck => {
          return (<View>
            <TouchableOpacity>
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
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 5,

  }
})