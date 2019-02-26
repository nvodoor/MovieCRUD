import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Movie from '../components/Movie.js';
import { connect } from 'react-redux';
import { deleteFavorite, getFavorites } from '../redux/actions.js';

class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  render() {
    const { favorites, deleteFavorite, getFavorites } = this.props;

    return (
      <ScrollView style={styles.container}>
        <NavigationEvents
          onWillFocus={() => getFavorites()}
        />
        {favorites.map(favorite => <Movie title={favorite.title}
          release_date={favorite.date}
          overview={favorite.overview}
          key={favorite.movieid}
          id={favorite.movieid}
          url={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${favorite.image}`}
          fav={deleteFavorite}
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

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id))
    },
    getFavorites: () => {
      dispatch(getFavorites())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen)