import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBj3Jm2ABmLZL_ymQqavTq3MQiLePNXWrg',
      authDomain: 'auth-7991f.firebaseapp.com',
      databaseURL: 'https://auth-7991f.firebaseio.com',
      projectId: 'auth-7991f',
      storageBucket: 'auth-7991f.appspot.com',
      messagingSenderId: '95337902664'
    });

    firebase.auth().onAuthStateChange((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
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
