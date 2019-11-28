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
    fontSize: 28,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 20,
    color: '$primaryNeutral',
    backgroundColor: '$primaryBackground',
    width: '100%',
  },
  header:{
    borderBottomWidth: 1,
    borderColor: '$primaryNeutral'
  }
})