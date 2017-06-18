import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    AsyncStorage.getItem('token').then((token) => {
      this.props.navigation.navigate('Content');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
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

Expo.registerRootComponent(App);
