import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from './src/components/Button'
import store from './src/store/index'
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Button />
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
