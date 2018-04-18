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
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import rootReducer from './src/reducers/rootReducer';
import watchSagas from './src/saga/rootSaga';
import { StackNavigator } from "react-navigation";
import { Icon } from 'native-base';
import HomeScreen from './src/components/HomeScreen/index'

const sagaMiddleware = createSagaMiddleware()
function configureStore() {
  let store
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(watchSagas)
  return store
}
const store = configureStore()

class App extends React.Component {


  render() {
    return (

      <Provider store={store} >
     
          
          <HomeScreen />
        
      </Provider>
    );
  }
}
export default App;

