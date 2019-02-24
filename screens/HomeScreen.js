import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to my Movie Search App!</Text>
        <Text>Click on search tab to find a movie.</Text>
        <Text>Click on favorites tab to find your favorite movies.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8dcab',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
