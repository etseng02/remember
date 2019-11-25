import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import DeckListScreen from '../screens/DeckListScreen'
import DeckView from '../screens/DeckView'
import AddCardScreen from '../screens/AddCardScreen'
import FreeStudyView from '../screens/FreeStudyScreen'
import EditCardsScreen from '../screens/EditCardsScreen'

const screens = 
  {
    DeckListScreen: {screen: DeckListScreen},
    DeckView: {screen: DeckView},
    AddCard: {screen: AddCardScreen},
    FreeStudy: {screen: FreeStudyView},
    EditCards: {screen: EditCardsScreen}
  }
;

const config = {
  headerMode: 'none',
  initialRouteName: 'DeckListScreen'
}

const MainNavigator = createStackNavigator(screens,config);

export default createAppContainer(MainNavigator);