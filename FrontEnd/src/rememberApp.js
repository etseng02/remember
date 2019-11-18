import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AddDeck from './containers/AddDeck'

class RememberApp extends Component{
  render(){
    return(
      <View>
        {/* <Text>Remember Harder</Text> */}
        <AddDeck/>
      </View>
    )
  }
}

export default RememberApp;