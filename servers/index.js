const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('../settings/config.js');

const app = express();

app.use(cors());

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

app.listen(port, () => {
  console.log(`Listening in on port: ${port}`)
})