import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Movie = ({ title, release_date, overview, id, url, fav, nameFav, movies }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: url}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>Release Date: {release_date}</Text>
        <Text style={styles.text}>Summary: {overview}</Text>
        <TouchableOpacity style={styles.button} onPress={() => fav(id, movies)}>
          <Text style={styles.buttonText}>{nameFav}</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'beige',
    width: "90%",
    margin: 20,
  },
  image: {
    width: 80,
    height: 120
  },
  imageContainer: {
    alignSelf: 'center',
    padding: 5
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 5
  },
  text: {
    padding: 5,
  },
  button: {
    width: 140,
    alignSelf: 'center',
    backgroundColor: '#f2dac1',
    borderRadius: 30
  },
  buttonText: {
    textAlign: 'center',
  }
})

export default Movie;
