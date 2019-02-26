import React from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button } from 'react-native';
import Movie from '../components/Movie.js';
import { connect } from 'react-redux';
import { submitText, addFavorite } from '../redux/actions.js';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({
      text: text
    })
  }

  render() {
    const { text } = this.state;
    const { movies, submitText, addFavorite } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewContainer}>
        <TextInput placeholder="Enter Movie" 
          value={text} 
          onChangeText={(val) => this.changeText(val)
          } />
          <Button onPress={() => submitText(text)} title="Submit"/>
        </View>
        {movies.map(movie => <Movie title={movie.title} 
                                    release_date={movie.release_date} 
                                    overview={movie.overview}
                                    key={movie.id}
                                    id={movie.id}
                                    url={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                                    fav={addFavorite}
                                    movies={movies}
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

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitText: (text) => {
      dispatch(submitText(text))
    },
    addFavorite: (id, movies) => {
      dispatch(addFavorite(id, movies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
