import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Logo from '../components/Logo'
import EditCard from '../containers/EditCard'
import EStyleSheet from 'react-native-extended-stylesheet'

class EditCardScreen extends Component{

  render(){
    return(
      <View style={Styles.container}>
        <EditCard navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default EditCardScreen;

const Styles = EStyleSheet.create({
  container:{
    backgroundColor: '$primaryBackgroundDark',
    flex: 1
  },
})