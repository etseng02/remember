import React from 'react';
import {Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

const Logo = () => {
  return (
    <Text style={Styles.appTitle}>Remember Harder</Text>
  )
}

export default Logo

const Styles = EStyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
    color: '$primaryColor'
  }
})