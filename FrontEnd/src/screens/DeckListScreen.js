import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AddDeck from '../containers/AddDeck'
import DeckList from '../containers/DeckList'
import Logo from '../components/Logo'

class DeckListScreen extends Component{

  render(){
    return(
      <View>
        <Logo/>
        <AddDeck/>
        <DeckList/>
      </View>
    )
  }
}

export default DeckListScreen;

const Styles = StyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  }
})