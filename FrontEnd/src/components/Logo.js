import React from 'react';
import {Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Text style={Styles.appTitle}>Remember Harder</Text>
  )
}

export default Logo

const Styles = StyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  }
})