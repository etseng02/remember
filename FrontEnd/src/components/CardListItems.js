import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const CardListItems = (props) => {

  let key = 0

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
      <Text style={Styles.deckListTitle}>{props.deck}</Text>
      {
        props.cards.map(card => {
          return (<Swipeable
            key ={key++}
            renderRightActions={() => <RightActions card={card}/>}
          >
          <View style={Styles.cardItem}>
            <TouchableOpacity onPress={() => {props.selectCard(card, props.deck), props.navigation.navigate('EditCard')}}>
              <Text >{key}: {card[0]} || {card[1]}</Text>
            </TouchableOpacity>
          </View>
          </Swipeable>)
        })}
    </View>
  )
}

export default CardListItems

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