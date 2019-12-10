import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ionicons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet'

const CardListItem = (props) => {



  const RightActions = (card) => {
    return(
      <TouchableOpacity
      style={Styles.deleteCard}
      onPress={() => props.deleteCard(card.card, props.deck)}>
        <View>
            <Ionicons style={Styles.deleteText}name="ios-trash"/>
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
          <Text style={Styles.cardText}>{props.id+1}: {props.card[0]} || {props.card[1]}</Text>
        </TouchableOpacity>
      </View>
      </Swipeable>
    </View>
  )
}

export default CardListItem

const Styles = EStyleSheet.create({
  cardItem: {
    width: '100%',
    fontSize: 24,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    zIndex: 1,
    backgroundColor: '$primaryBackground',
    borderTopWidth: 1
  },
  cardText:{
    color: '$primaryNeutral',
    fontSize: '1 rem'
  },
  deleteCard: {
    flexDirection: 'row',
    backgroundColor: 'orangered',
    zIndex: 0,
    marginLeft: 0,
    alignSelf: 'center',
    paddingLeft: '1.5 rem',
    paddingRight: '1.5 rem',
    paddingTop: '0.25rem',
    borderTopWidth: 1,    
  },
  deleteText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
  }

})