import Expo from 'expo';
import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUp from './SignUp';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {//name of page that apppears at top of app
    title: 'Sign Up',
  };

  componentWillMount() {
    AsyncStorage.getItem('token').then((token) => {//after component mounts, grab jwt token
      this.props.navigation.navigate('Content'); //after token clears, navigate to 'content'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        //add signin button here
        <SignUp navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: Home },
  Content: { screen: Content },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
