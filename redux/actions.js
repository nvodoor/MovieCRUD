export const submitText = text => {
  return (dispatch) => {
  fetch(`http://localhost:3000/movie/:${text}`)
    .then(res => res.json())
    .then(data => {
      dispatch(getText(data))
    })
  }
}

export const getText = data => ({
  type: 'TEXT',
  payload: {
    movies: data
  }
})

export const addFavorite = (id, movies) => {
  return (dispatch) => {
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
      .then(() => dispatch(getFavorites()))
  }
}

export const deleteFavorite = (id) => {
  return (dispatch) => {
    fetch('http://localhost:3000/movie', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
      })
      .then(() => dispatch(getFavorites()))
  }
}

export const getFavorites = () => {
  return (dispatch) => {
  fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(data => dispatch(sendFavorites(data)))
  }
}

export const sendFavorites = data => ({
  type: 'FAVORITES',
  payload: {
    favorites: data
  }
})