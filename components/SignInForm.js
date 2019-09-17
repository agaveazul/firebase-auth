import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase'

const ROOT_URL = 'https://us-central1-one-time-password-79d69.cloudfunctions.net';

const SignInForm = () => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: phone, code: code })
      firebase.auth().signInWithCustomToken(data.token);
    }
     catch (err) {
      console.log(err)
    }
  }

  return (
    <View>
      <View>
        <Input
          label="Enter Phone Number"
          autoCapitalize="none"
          autoCorrect={false}
          value={phone}
          onChangeText={(newPhone) => setPhone(newPhone)}
        />
        <Input
          label="Enter Code"
          autoCapitalize="none"
          autoCorrect={false}
          value={code}
          onChangeText={(newCode) => setCode(newCode)}
        />
      </View>
      <Button onPress={this.handleSubmit} title="Submit" />
    </View>
  )
}

export default SignInForm;
