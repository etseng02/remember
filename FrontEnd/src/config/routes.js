import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import DeckListScreen from '../screens/DeckListScreen'
import DeckView from '../screens/DeckView'

const screens = 
  {
    DeckListScreen: {screen: DeckListScreen},
    DeckView: {screen: DeckView}
  }
;

const config = {
  headerMode: 'none',
  initialRouteName: 'DeckListScreen'
}

const MainNavigator = createStackNavigator(screens,config);

export default createAppContainer(MainNavigator);