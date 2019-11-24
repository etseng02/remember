import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import FreeStudy from '../containers/FreeStudy'

class FreeStudyView extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <FreeStudy/>

      </View>
    )
  }
}

export default FreeStudyView;

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