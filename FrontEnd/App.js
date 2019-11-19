import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from './src/components/Button'
import store from './src/store/index'
import {Provider} from 'react-redux'
import RememberApp from './src/rememberApp'

export default function App() {
  
  
  store.subscribe(()=>{
    console.log(store.getState())
  })


  return (
    <Provider store={store}>
      <View>
        <RememberApp/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
