import { GET_MOVIES } from '../reduxTypes'

const initialState = { movies: [] }

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { movies: action.payload }
    default:
      return state
  }
}
