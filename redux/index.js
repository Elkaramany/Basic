import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { reducer as AuthReducer } from './reducers/authReducer'

const rootReducer = combineReducers({
    Auth: AuthReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true,
});

const persistor = persistStore(store);

export { persistor, store };;
export * from './reducers'
