import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productRuducer from "../redux/productRedux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootreducer = combineReducers({user: userReducer, product: productRuducer})

const persistedReducer = persistReducer(persistConfig, rootreducer)


export const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         })
});

export let persistor = persistStore(store)


