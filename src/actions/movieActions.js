import axios from 'axios'
import { GET_MOVIES } from '../reduxTypes'

export const getMovieData = searchValue => {
  return dispatch => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=b5c95d88`)
      .then(res => {
        dispatch({ type: GET_MOVIES, payload: res.data.Search })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
