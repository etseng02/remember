import React from 'react'
import {Text, TouchableOpacity, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import EStyleSheet from 'react-native-extended-stylesheet'



const DeckListItems = (props) => {

  let key = 0

  const RightActions = (deck) => {
    return(
      <TouchableOpacity
      style={Styles.deleteDeck}
      onPress={() => {props.selectDeck(deck.name), props.navigation.navigate('DeleteConfirm')}}>
        <View >
            <Text style={Styles.deleteText}>DELETE</Text>
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
                  <Text style={Styles.deckText}>{deck}</Text>
                </TouchableOpacity>
              </View>
          </Swipeable>)
        })}
    </View>
  )
}

export default DeckListItems

const Styles = EStyleSheet.create({
  deckListTitle: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    color: '$primaryColor'
  },
  deckText: {
    fontSize: 24,
    textAlign: 'center',
    zIndex: 1,
    color:'$primaryNeutral'

  },
  ListItem: {
    zIndex: 1,
    backgroundColor: '$primaryBackground',
    borderWidth: 1,
    padding: 10,
    borderColor: '$primaryColor',
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginRight: 0,
    margin: 5
  },
  deleteDeck: {
    flexDirection: 'row',
    backgroundColor: 'red',
    zIndex: 0,
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 36,
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
  deleteText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }

})