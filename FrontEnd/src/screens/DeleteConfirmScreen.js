import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../components/Logo'
import DeleteConfirm from '../containers/DeleteConfirm'
import EStyleSheet from 'react-native-extended-stylesheet'

class DeleteConfirmScreen extends Component{

  render(){


    return(
      <View style={Styles.container}>
        <DeleteConfirm navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default DeleteConfirmScreen;

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '#43484c',
    flex: 1
  }
})