import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Movie from '../components/Movie.js';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    }
    this.getFavorites = this.getFavorites.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);
  }

  getFavorites() {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(data => {
      this.setState({
        favorites: data,
      })})
  }

  removeFavorites(id) {
    console.log(id);
  }

  render() {
    const { favorites } = this.state;
    return (
      <ScrollView style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this.getFavorites()}
        />
        {favorites.map(favorite => <Movie title={favorite.title}
          release_date={favorite.date}
          overview={favorite.overview}
          key={favorite.movieid}
          id={favorite.movieid}
          url={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${favorite.image}`}
          fav={this.removeFavorites}
          nameFav={"Remove Favorite"}
        />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#e8dcab'
  }
})
