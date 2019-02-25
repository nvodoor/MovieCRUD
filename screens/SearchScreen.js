import React from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button } from 'react-native';
import Movie from '../components/Movie.js';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      movies: [],
    }
    this.changeText = this.changeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  changeText(text) {
    this.setState({
      text: text
    })
  }

  onSubmit() {
    const { text } = this.state;
    fetch(`http://localhost:3000/movie/:${text}`)
    .then(res => res.json())
    .then(data => this.setState({
      movies: data
    }))
  }

  addFavorite(id) {
    const { movies } = this.state;
    let favorite;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        favorite = movies[i];
      }
    }
    fetch(`http://localhost:3000/movie/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(favorite)
    })
    .then(res => console.log(res))
  }

  render() {
    const { text, movies } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewContainer}>
        <TextInput placeholder="Enter Movie" 
          value={text} 
          onChangeText={(val) => this.changeText(val)
          } />
          <Button onPress={this.onSubmit} title="Submit"/>
        </View>
        {movies.map(movie => <Movie title={movie.title} 
                                    release_date={movie.release_date} 
                                    overview={movie.overview}
                                    key={movie.id}
                                    id={movie.id}
                                    url={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                                    fav={this.addFavorite}
                                    nameFav={"Add Favorite"}
                                    />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#e8dcab',
  },
  viewContainer: {
    flex: 1, 
    alignItems: 'center'
  }
});
