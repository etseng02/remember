import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import EditCards from '../containers/EditCards'

class EditCardsScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <Logo/>
        <EditCards navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default EditCardsScreen;

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