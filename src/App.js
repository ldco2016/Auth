import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBj3Jm2ABmLZL_ymQqavTq3MQiLePNXWrg',
      authDomain: 'auth-7991f.firebaseapp.com',
      databaseURL: 'https://auth-7991f.firebaseio.com',
      projectId: 'auth-7991f',
      storageBucket: 'auth-7991f.appspot.com',
      messagingSenderId: '95337902664'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
