import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import AddCards from '../containers/AddCards'
import EStyleSheet from 'react-native-extended-stylesheet'
import AddDeck from '../containers/AddDeck'

class AddDeckScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <AddDeck navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default AddDeckScreen;

const Styles = StyleSheet.create({
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
})