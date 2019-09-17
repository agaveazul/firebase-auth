import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default function App() {
  const config = {
    apiKey: "AIzaSyB0s3CTsjZIcVYpGlqQQwP-wnUIk3OLGZc",
    authDomain: "one-time-password-79d69.firebaseapp.com",
    databaseURL: "https://one-time-password-79d69.firebaseio.com",
    projectId: "one-time-password-79d69",
    storageBucket: "",
    messagingSenderId: "119216833222",
    appId: "1:119216833222:web:44eca13b868203c9484dc7"
  };
  firebase.initializeApp(config);

  return (
    <View style={styles.container}>
      <SignUpForm />
      <View  style={{ marginTop: 30 }}>
      <SignInForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
