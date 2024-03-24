import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import hotelReducer from "./hotelRedux";
import realUserReducer from "./realUserRedux";
import cartReducer from "./cartHotel";
import cityReducer from "./cityRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer , hotel: hotelReducer, realUser: realUserReducer,cart:cartReducer,city:cityReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);