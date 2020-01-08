import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import DeckListScreen from '../screens/DeckListScreen'
import DeckView from '../screens/DeckView'
import AddCardScreen from '../screens/AddCardScreen'
import FreeStudyView from '../screens/FreeStudyScreen'
import CardsListScreen from '../screens/CardsListScreen'
import DeleteConfirmScreen from '../screens/DeleteConfirmScreen'
import EditCardScreen from '../screens/EditCardScreen'
import AddDeckScreen from '../screens/AddDeckScreen'
import EnchanedStudyScreen from '../screens/EnhancedStudyScreen'

const screens = 
  {
    DeckListScreen: {screen: DeckListScreen},
    DeckView: {screen: DeckView},
    FreeStudy: {screen: FreeStudyView},
    CardsList: {screen: CardsListScreen},
    EditCard: {screen: EditCardScreen},
    EnhancedStudy: {screen: EnchanedStudyScreen}
  }
;

const config = {
  headerMode: 'none',
  initialRouteName: 'DeckListScreen'
}



const MainNavigator = createStackNavigator(screens,config);

export const AppNavigator = createStackNavigator(
  {
    content: MainNavigator,
    DeleteConfirm: { screen: DeleteConfirmScreen },
    AddDeck: {screen: AddDeckScreen},
    AddCard: {screen: AddCardScreen},
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'content'
  }
);

export default createAppContainer(AppNavigator);