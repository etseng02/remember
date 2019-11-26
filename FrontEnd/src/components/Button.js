import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

const Button = (props) => {
  return (
    <TouchableOpacity style ={props.style} onPress={props.onPress} >
    {/* {props.type === 'addcard' ? <Text>Hello</Text>:null}  */}
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  buttonText: {
    color: '$primaryNeutral',
    fontSize: 18,
  }

});

export { Button };