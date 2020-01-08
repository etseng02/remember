import React, {Component} from 'react'
import {View, Text} from 'react-native'
import FreeStudy from '../containers/FreeStudy'
import EStyleSheet from 'react-native-extended-stylesheet'

class EnchanedStudyScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <FreeStudy/>
      </View>
    )
  }
}

export default EnchanedStudyScreen;

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '$primaryBackgroundDark',
    flex: 1
  },
})