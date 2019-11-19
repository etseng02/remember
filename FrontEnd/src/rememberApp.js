import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AddDeck from './containers/AddDeck'
import DeckList from './containers/DeckList'

class RememberApp extends Component{
  render(){
    return(
      <View>
        {/* <Text>Remember Harder</Text> */}
        <AddDeck/>
          <View>
            <DeckList/>
          </View>

      </View>
    )
  }
}

export default RememberApp;