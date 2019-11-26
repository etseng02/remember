import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'
import EStyleSheet from 'react-native-extended-stylesheet'


const Confirm = (props) => {

  return(
    <View>
      <Text style={Styles.title}>Are you sure you wish to delete: {props.deck}</Text>
      <Button style={Styles.button} text={'Confirm'} onPress={()=>{props.navigation.navigate('DeckListScreen'), props.deleteDeck(props.deck)}}/>
      <Button style={Styles.button} text={'Cancel'} onPress={() => props.navigation.goBack()} />
    </View>
  )
}

export default Confirm

const Styles = EStyleSheet.create({
  title:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
    color: '$primaryColor'
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
})