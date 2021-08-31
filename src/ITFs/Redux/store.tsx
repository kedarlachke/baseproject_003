import {createStore,applyMiddleware} from 'redux'
import  reducer from './Reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducer)
//const store = createStore(reducer,applyMiddleware(thunk));

export let store = createStore(persistedReducer,applyMiddleware(thunk))
export let persistor = persistStore(store)

  
// export default store;