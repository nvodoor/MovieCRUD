import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Movie = ({ title, release_date, overview }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{release_date}</Text>
      <Text>{overview}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    width: "90%",
    margin: 20,
    padding: 20
  }
})

export default Movie;
