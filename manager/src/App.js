import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBZRIIQsENxogmPy5vyiVslt9U8zIXa2dA',
      authDomain: 'manager-c3f07.firebaseapp.com',
      databaseURL: 'https://manager-c3f07.firebaseio.com',
      projectId: 'manager-c3f07',
      storageBucket: '',
      messagingSenderId: '838657761599'
    }

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
