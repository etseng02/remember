import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const CardListItems = (props) => {

  let key = 0
  
  return(
    <View>
      <Text style={styles.deckListTitle}>The Current Deck</Text>
      {
        props.cards.map(card => {
          return (<View key ={key++}>
            <TouchableOpacity onPress={() => {props.navigation.navigate('DeckView')}}>
              <Text style={styles.deckItem}>{card[0]}</Text>
            </TouchableOpacity>
          </View>)
        })}
    </View>
  )
}

export default CardListItems

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