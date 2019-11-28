import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import AddCards from '../containers/AddCards'

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

const Styles = StyleSheet.create({
  appTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  container:{
    backgroundColor: '#43484c',
    flex: 1
  },
})