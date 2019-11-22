import {createStore} from 'redux'
import rootReducer from '../reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
 // return { store, persistor }


//export default store = createStore(rootReducer)