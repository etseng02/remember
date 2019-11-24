import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
  return {
    deck: state.decks.current,
    cards: state.cards,
  }
}

class FreeStudy extends Component{

  constructor(props){
    super(props);
 
    this.state = {
       text: '',
    }
 }

 componentDidMount = () => {
   console.log("Hi")
 }


  render(){
    return(
      <View >
        <Text style={Styles.deckTitle}>{this.props.deck}</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps)(FreeStudy);

const Styles = StyleSheet.create({
  input:{
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    padding: 10,
    height: 50,
    width: '100%',
    marginTop: 30,
    marginRight: 0,
  },
  deckTitle:{
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
});