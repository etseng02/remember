import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Logo from '../components/Logo'
import AddCards from '../containers/AddCards'
import EStyleSheet from 'react-native-extended-stylesheet'

class AddCardScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <AddCards navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default AddCardScreen;

const Styles = EStyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  container:{
    backgroundColor: '$primaryBackgroundDark',
    flex: 1
  },
})