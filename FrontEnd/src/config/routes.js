import {StackNavigator, createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import DeckListScreen from '../screens/DeckListScreen'

const RootStack = createStackNavigator({
  Home: {
    screen: DeckListScreen
  }
});

const Navigator = createAppContainer(RootStack);

export default Navigator;