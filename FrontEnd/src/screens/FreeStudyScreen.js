import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import FreeStudy from '../containers/FreeStudy'
import EStyleSheet from 'react-native-extended-stylesheet'

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

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '$primaryBackgroundDark',
    flex: 1
  },
})