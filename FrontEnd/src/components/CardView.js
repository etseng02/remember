import React from 'react'
import {Text, View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const CardView = (props) => {
  return (
    <View style={Styles.cardContainer}>
      <Text style={Styles.card}>{props.card}</Text>
    </View>
  )
}

export default CardView

const Styles = EStyleSheet.create({
  cardContainer:{
    borderWidth: 3,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: '$primaryNeutral',
    backgroundColor: '$primaryBackground',
    height: '20 rem',
    width: '20 rem'
  },
  card:{
    fontSize: 50,
    textAlign: 'center',
    color: '$primaryNeutral',

  }
});