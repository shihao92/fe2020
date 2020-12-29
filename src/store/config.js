import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'fe-testapp',
  storage
};

const persistedReducer = persistReducer( persistConfig, rootReducer );

export default function configureStore( initialState ) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( thunk, reduxImmutableStateInvariant())
  );
  // return createStore(
  //   persistedReducer,
  //   initialState,
  //   compose(
  //     applyMiddleware(thunk, reduxImmutableStateInvariant())
  //   )
  // )
}