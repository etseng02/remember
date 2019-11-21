import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style ={styles.buttonBody} onPress={props.onPress} >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#00aeef',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }

});

export { Button };