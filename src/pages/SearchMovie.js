//external imports
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { TextField, Container } from '@mui/material'

// internal imports
import { getMovieData } from '../actions/movieActions'
import { MovieCard } from '../components/MovieCard'

export const SearchMovie = () => {
  const { movies } = useSelector(state => state.movies)
  const dispatch = useDispatch()

  const handleChangeSearchMovie = e => {
    const { value } = e.target
    dispatch(getMovieData(value))
  }

  return (
    <Container display="flex">
      <Box
        component="form"
        sx={{
          background: 'white',
          maxWidth: 800,
        }}
        noValidate
        autoComplete="off"
        m={6}
        borderRadius={4}
      >
        <TextField
          id="outlined-basic"
          label="Search movie ..."
          variant="outlined"
          fullWidth
          onChange={handleChangeSearchMovie}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {movies?.map(movie => (
          <MovieCard key={movie?.imdbID} movie={movie} />
        ))}
      </Box>
    </Container>
  )
}
