import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './Counter.js';
import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
import {ContactsWatcher} from './sagas'
import {Provider} from 'react-redux';
import {productReducer} from './reducers'

const sagaMiddleware=createSagaMiddleware();
const myStore=createStore(productReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(ContactsWatcher);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={myStore}>
          <Contacts />
          </Provider>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
