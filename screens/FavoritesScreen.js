import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Movie from '../components/Movie.js';
import { connect } from 'react-redux';
import { deleteFavorite, getFavorites } from '../redux/actions.js';

class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  keyGet = (item, index) => item.id.toString()

  itemRender = (feedItem) => {
    const { deleteFavorite } = this.props;
    const { item, index } = feedItem;
    return <Movie title={item.title}
      release_date={item.date}
      overview={item.overview}
      key={item.movieid}
      id={item.movieid}
      url={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.image}`}
      fav={deleteFavorite}
      nameFav={"Remove Favorite"}
    />
  }

  render() {
    const { favorites, getFavorites } = this.props;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => getFavorites()}
        />
        <FlatList data={favorites}
                  keyExtractor={this.keyGet}
                  renderItem={this.itemRender}
        />
      </View>
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