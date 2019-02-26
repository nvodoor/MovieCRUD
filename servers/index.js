const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('../settings/config.js');
const parser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(parser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Ferrismovies'
})

connection.connect();

const port = process.env.PORT || 3000;

app.get('/movie/:name', (req, res) => {
  const name = req.params.name;
  const key = config.apiKey;
  const url = 'https://api.themoviedb.org/3/search/movie';
  axios.get(url, {
    params: {
      api_key: key,
      query: name
    }
  })
  .then(response => res.send(response.data.results))
  .catch(err => res.send(404, "movie can't be found"))
})

app.get('/movies', (req, res) => {
  const querystring = 'SELECT * from movies';
  connection.query(querystring, (err, response) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(response);
    }
  })
})

app.post('/movie', (req, res) => {
  const movie = req.body;
  const querystring = 'INSERT INTO movies (title, date, movieid, overview, image) VALUES (?, ?, ?, ?, ?)';
  connection.query(querystring, [movie.title, movie.release_date, movie.id, movie.overview, movie.poster_path], (err, response) => {
    if (err) {
      // 409 status code because this is a conflict.
      console.log(err)
      res.status(409).send(err)
    } else {
      res.send('Record added.')
    }
  })
})

app.delete('/movie', (req, res) => {
  const id = req.body.id;
  const querystring = 'DELETE FROM movies WHERE movieid = (?)';
  connection.query(querystring, [id], (err, response) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send('Record deleted.')
    }
  })
})

app.listen(port, () => {
  console.log(`Listening in on port: ${port}`)
})