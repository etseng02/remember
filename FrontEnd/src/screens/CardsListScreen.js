import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import CardsList from '../containers/CardsList'
import EStyleSheet from 'react-native-extended-stylesheet'

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

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '$primaryBackgroundDark',
    flex: 1
  },
})