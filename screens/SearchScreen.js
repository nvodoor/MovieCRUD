import React from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button } from 'react-native';

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
