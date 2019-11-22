import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store, persistor } from './src/store/index'
import {Provider} from 'react-redux'
import MainNavigator from './src/config/routes'

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

export default function App() {

  const persistor = persistStore(store);
 
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