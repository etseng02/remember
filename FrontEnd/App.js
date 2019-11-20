import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from './src/components/Button'
import store from './src/store/index'
import {Provider} from 'react-redux'
import DeckListScreen from './src/screens/DeckListScreen'
import MainNavigator from './src/config/routes'

export default function App() {
  
  
  store.subscribe(()=>{
    console.log(store.getState())
  })

  return (
    <Provider store={store}>
        <MainNavigator/>
    </Provider>
  );
}