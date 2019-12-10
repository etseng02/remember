import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DeckTitleHeader from './DeckTitleHeader'

const CardListItem = (props) => {



  const RightActions = (card) => {
    return(
      <TouchableOpacity
      style={Styles.deleteCard}
      onPress={() => props.deleteCard(card.card, props.deck)}>
        <View >
            <Text>Delete Item</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  return(
    <View>
      <Swipeable
        renderRightActions={() => <RightActions card={props.card}/>}
      >
      <View style={Styles.cardItem}>
        <TouchableOpacity onPress={() => {props.selectCard(props.id, props.deck), props.navigation.navigate('EditCard')}}>
          <Text >{props.id+1}: {props.card[0]} || {props.card[1]}</Text>
        </TouchableOpacity>
      </View>
      </Swipeable>
    </View>
  )
}

export default CardListItem

const Styles = StyleSheet.create({
  deckListTitle: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  cardItem: {
    width: '100%',
    fontSize: 24,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    zIndex: 1,
    backgroundColor: 'white',


  },
  deleteCard: {
    backgroundColor: 'red',
    zIndex: 0
  },

})