import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import CardsList from '../containers/CardsList'

class CardsListScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <CardsList navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default CardsListScreen;

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