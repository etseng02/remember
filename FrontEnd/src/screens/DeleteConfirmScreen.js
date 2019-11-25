import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import DeleteConfirm from '../containers/DeleteConfirm'

class DeleteConfirmScreen extends Component{

  render(){


    return(
      <View>
        <DeleteConfirm navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default DeleteConfirmScreen;

const Styles = StyleSheet.create({
  container:{
    padding: 10,
    borderWidth: 1,
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
})