import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style ={styles.buttonBody}>
      <Text style={styles.buttonText}> Placeholder</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#00aeef',
    width: '80%',
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