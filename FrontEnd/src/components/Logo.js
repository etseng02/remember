import React from 'react';
import {Text, View  } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

const Logo = () => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.appTitle}>Remember Harder</Text>
    </View>
  )
}

export default Logo

const Styles = EStyleSheet.create({
  appTitle:{
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2 rem',
    color: '$primaryColorComp',
    backgroundColor: '$primaryBackgroundDark',
    width: '100%',
  },
  header:{
    borderBottomWidth: 1,
    borderColor: '$primaryNeutral',
    paddingTop: "2.5 rem"
  }
})