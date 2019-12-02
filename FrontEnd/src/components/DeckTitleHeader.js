import React from 'react';
import {Text, View  } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

const DeckTitleHeader = (props) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.appTitle}>{props.text}</Text>
    </View>
  )
}

export default DeckTitleHeader

const Styles = EStyleSheet.create({
  appTitle:{
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2 rem',
    color: '$primaryNeutral',
    backgroundColor: '$primaryBackgroundDark',
    width: '100%',
  },
  header:{
    borderBottomWidth: 1,
    borderColor: '$primaryNeutral',
    paddingTop: "2.5 rem"
  }
})