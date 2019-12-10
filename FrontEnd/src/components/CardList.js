import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DeckTitleHeader from './DeckTitleHeader'
import CardListItem from './CardListItem'


const CardList = (props) => {
  let key = -1
  
  return(
    <View>
      <DeckTitleHeader text={props.deck}/>
      {
        props.cards.map(card => {
          return (
            <CardListItem
              key={key++}
              id={key}
              card ={card}
              selectCard={props.selectCard}
              navigation={props.navigation}
            />
          )
        })}
    </View>
  )
}

export default CardList

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