import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import EditCard from '../containers/EditCard'

class EditCardScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <Logo style={Styles.appTitle}/>
        <EditCard navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default EditCardScreen;

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