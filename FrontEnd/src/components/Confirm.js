import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from './Button'
import EStyleSheet from 'react-native-extended-stylesheet'


const Confirm = (props) => {

  return(
    <View style={Styles.container}>
      <Text style={Styles.title}>Are you sure you wish to delete: {props.deck}</Text>
      <Button style={Styles.buttonConfirm} text={'Confirm'} onPress={()=>{props.navigation.navigate('DeckListScreen'), props.deleteDeck(props.deck)}}/>
      <Button style={Styles.buttonCancel} text={'Cancel'} onPress={() => props.navigation.goBack()} />
    </View>
  )
}

export default Confirm

const Styles = EStyleSheet.create({
  container:{
    borderWidth: 1,
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: '$primaryColor',
    backgroundColor:'$primaryBackground'
  },
  title:{
    fontSize: 28,
    textAlign: 'center',
    color: '$primaryNeutral',

  },
  buttonConfirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: 'orangered',
    borderColor: 'orangered',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonCancel: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
  }
})