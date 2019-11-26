import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Logo from '../components/Logo'
import Deck from '../containers/Deck'
import EStyleSheet from 'react-native-extended-stylesheet'

class DeckView extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <Logo/>
        <Deck navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default DeckView;

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '$primaryBackground',
    flex: 1
  }
})