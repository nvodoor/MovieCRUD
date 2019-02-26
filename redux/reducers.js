const initialState = {
  movies: [],
  favorites: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'TEXT': {
      const { movies } = action.payload;
      return {
        ...state,
        movies: movies
      }
    }
    case 'FAVORITES': {
      const { favorites } = action.payload;
      return {
        ...state,
        favorites: favorites
      }
      }
    default:
      return state
  }
}