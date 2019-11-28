import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'
import EStyleSheet from 'react-native-extended-stylesheet'

const deckDetails = (props) => {

  return(
    <View>
      <Text style={Styles.deckTitle}>{props.deckName}</Text>
      <Text style={Styles.details}>Number of Cards: {props.deck.cards.length}</Text>
      <View style={Styles.buttonLayout}>
        <Button style={Styles.enhancedStudy}text="Enhanced Study"/>
          <View style={Styles.buttonLayoutColumn}>
            <Button style={Styles.freeStudy}text="Free Study"onPress={() => {props.navigation.navigate('FreeStudy')}}/>
            <Button style={Styles.editCards}text="Edit Cards"onPress={() => {props.navigation.navigate('CardsList')}}/>
          </View>
      </View>
    </View>
  )
}

export default deckDetails

const Styles = EStyleSheet.create({
  deckTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
    color: "$primaryNeutral"
  },
  details:{
    color: "$primaryNeutral"
  },
  buttonLayout:{
    flexDirection:'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonLayoutColumn:{
    flexDirection:'column'
  },
  enhancedStudy: {
    backgroundColor: '$primaryColorComp',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    borderRadius: 10,
    margin: 5
  },
  freeStudy: {
    backgroundColor: '$primaryColor',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 5
  },
  editCards: {
    backgroundColor: '$primaryColor',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 5
  }
})