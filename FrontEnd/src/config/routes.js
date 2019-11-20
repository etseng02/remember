import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import DeckListScreen from '../screens/DeckListScreen'

const screens = 
  {
    DeckListScreen: {screen: DeckListScreen},
  }
;

const config = {
  headerMode: 'none',
  initialRouteName: 'DeckListScreen'
}

const MainNavigator = createStackNavigator(screens,config);

export default createAppContainer(MainNavigator);