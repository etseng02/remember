import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store, persistor } from './src/store'
import {Provider} from 'react-redux'
import MainNavigator from './src/config/routes'

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import EStyleSheet from 'react-native-extended-stylesheet'

export default function App() {

  EStyleSheet.build({
    $primaryBackground: '#43484c',
    $primaryBackgroundDark: '#24282B',
    $primaryColor: '#0A64A4',
    $primaryColorComp: 'orangered',
    $primaryNeutral: 'white'
  })
 
  store.subscribe(()=>{
    console.log(store.getState())
  })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <MainNavigator/>

      </PersistGate>
    </Provider>
  );
}