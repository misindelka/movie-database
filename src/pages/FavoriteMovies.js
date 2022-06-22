//external imports
import * as React from 'react'
import { Box, Button } from '@mui/material'

// internal imports
import { MovieCard } from '../components/MovieCard'

export const FavoriteMovies = ({ favoriteMoviesData, removeFromFavorites }) => {
  return (
    <Box mt={4}>
      {favoriteMoviesData.map(movie => (
        <Box
          key={movie?.imdbID}
          display="flex"
          flexDirection="column"
          mb={4}
          onClick={() => removeFromFavorites(movie?.imdbID)}
        >
          <MovieCard key={movie?.imdbID} movie={movie} />
          <Button variant="contained" href="#contained-buttons" color="error">
            Remove From Favorites
          </Button>
        </Box>
      ))}
    </Box>
  )
}
