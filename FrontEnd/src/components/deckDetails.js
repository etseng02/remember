import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'
import DeckTitleHeader from './DeckTitleHeader'
import EStyleSheet from 'react-native-extended-stylesheet'

const deckDetails = (props) => {

  return(
    <View >
      <DeckTitleHeader style={Styles.deckTitle} text={props.deckName} />

      {props.deck.cards.length === 0 ?
        <View style={Styles.noCardsContainer}>
          <Text style={Styles.noCardsText}>There are no cards in this deck!</Text>
          <Button
            text={'Add Cards'}
            style={Styles.buttonConfirm}
            onPress={()=> props.navigation.navigate('AddCard')}
          />
        </View>
      :null}
      

      
      {props.deck.cards.length > 0 ?
        <View style={Styles.buttonLayout}>
          <Button style={Styles.enhancedStudy}text="Enhanced Study"/>
            <View style={Styles.buttonLayoutColumn}>
              <Button style={Styles.freeStudy}text="Free Study"onPress={() => {props.navigation.navigate('FreeStudy')}}/>
              <Button style={Styles.editCards}text="Edit Cards"onPress={() => {props.navigation.navigate('CardsList')}}/>
            </View>
        </View> 
      :null}


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
  },
  buttonConfirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '$primaryColor',
    borderColor: '$primaryColor',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  noCardsText:{
    fontSize: '1.5rem',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "$primaryNeutral",
    marginBottom: '1rem'
  },
  noCardsContainer:{
    borderWidth: 3,
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 30,
    borderColor: '$primaryColor',
    backgroundColor: '$primaryBackground'
  }
})