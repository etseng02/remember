import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'

class DeckView extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <Logo/>
      </View>
    )
  }
}

export default DeckView;

const Styles = StyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  container:{
  }
})