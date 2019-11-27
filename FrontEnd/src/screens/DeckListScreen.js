import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AddDeck from '../containers/AddDeck'
import DeckList from '../containers/DeckList'
import Logo from '../components/Logo'
import {Button} from '../components/Button'
import EStyleSheet from 'react-native-extended-stylesheet'

class DeckListScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <Logo/>
        <DeckList navigation={this.props.navigation}/>
        <Button style={Styles.addButton}text={'+'} onPress={()=> this.props.navigation.navigate('AddDeck')}/>
      </View>
    )
  }
}

export default DeckListScreen;

const Styles = EStyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  container:{
    backgroundColor: '#43484c',
    flex: 1
  },
  addButton:{
    backgroundColor: '$primaryColor',
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:20,
    right:20,
  }
})