/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { Provider} from "react-redux";
import MainContent from './src/components/MainContent'
import rootReducer from './src/reducers/rootReducer';
import watchSagas from './src/saga/rootSaga';
import { StackNavigator } from "react-navigation";

const sagaMiddleware = createSagaMiddleware()
function configureStore() {
  let store
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(watchSagas)
  return store
}
const store = configureStore()
const RootStack = StackNavigator({
  Home:{
    screen:MainContent
  }
})

class App extends React.Component {
 

  render() {
    return (
      <Provider store={store} >
        <MainContent/>
      </Provider>
    );
  }
}
export default App;

