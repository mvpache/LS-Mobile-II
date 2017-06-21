import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      AsyncStorage.getItem('token', response.data.token).then(() => {
        this.props.navigate('Content');
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(password => this.setState({ password }))}
          value={this.state.password}
        />
        <Button
          title="Submit"
          onPress={this.SignIn}
        />
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default SignIn;
