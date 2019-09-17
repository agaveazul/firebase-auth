import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-79d69.cloudfunctions.net';

const SignUpForm = () => {
  const [phone, setPhone] = useState('')

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: phone })
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: phone })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View>
      <View style={{ marginBottom: 10}}>
        <Input
          label="Enter Phone Number"
          autoCapitalize="none"
          autoCorrect={false}
          value={phone}
          onChangeText={(newPhone) => setPhone(newPhone)}
        />
      </View>
      <Button onPress={this.handleSubmit} title="Submit" />
    </View>
  )
}

export default SignUpForm;
