import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Logo from '../components/Logo'
import Deck from '../containers/Deck'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Button} from '../components/Button'

class DeckView extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <Deck navigation={this.props.navigation}/>
        <Button style={Styles.addButton}text={'+'} onPress={()=> this.props.navigation.navigate('AddCard')}/>
      </View>
    )
  }
}

export default DeckView;

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '$primaryBackground',
    flex: 1
  },
  addButton:{
    backgroundColor: '$primaryColor',
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:20,
    right:20,
  }
})