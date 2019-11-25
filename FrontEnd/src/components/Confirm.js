import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'


const Confirm = (props) => {

  return(
    <View>
      <Text style={Styles.deckTitle}>{props.deckName}</Text>
      <Button text={'Confirm'} onPress={()=>{}}/>
      <Button text={'Cancel'} onPress={() => props.navigation.goBack()} />
    </View>
  )
}

export default Confirm

const Styles = StyleSheet.create({
  deckTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  container:{
  }
})