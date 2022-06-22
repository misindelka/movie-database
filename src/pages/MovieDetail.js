//external imports
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardActionArea, Box, Typography, CardMedia, IconButton } from '@mui/material'
import StarRateIcon from '@mui/icons-material/StarRate'

export const MovieDetail = ({ addToFavorites, favoriteMoviesIds }) => {
  const location = useLocation()
  const { movie } = location?.state

  const isFavoriteMovie = Object.values(favoriteMoviesIds).includes(movie?.imdbID)

  const formValues = [
    {
      label: 'Title : ',
      id: movie?.imdbID,
      value: movie?.Title,
      id: movie?.imdbID,
    },
    {
      label: 'Type : ',
      value: movie?.Type,
      id: movie?.imdbID,
    },
    {
      label: 'Year : ',
      value: movie?.Year,
      id: movie?.imdbID,
    },
  ]
  return (
    <Box height="100%" m={2} pt={4} display="flex">
      <Card sx={{ width: 500, background: 'black' }}>
        <CardActionArea>
          <CardMedia sx={{ maxHeight: 500 }} component="img" image={movie?.Poster} alt="Movie" />
          <Box
            sx={{ maxHeight: 250, background: 'black', color: 'white', marginTop: '10px' }}
            display="flex"
            flexDirection="column"
          >
            <Box display="flex" flexDirection="column">
              {formValues?.map(({ label, value, id }) => (
                <Box
                  key={id}
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingTop: '10px',
                    marginRight: '30px',
                    alignItems: 'center',
                  }}
                  ml={4}
                  justifyContent="center"
                >
                  <Typography variant="p" fontSize={20} component="div" align="center">
                    {label}
                  </Typography>

                  <Typography
                    variant="p"
                    align="center"
                    fontSize={25}
                    fontWeight="bold"
                    component="div"
                    pl={2}
                  >
                    {value}
                  </Typography>
                </Box>
              ))}
              <IconButton aria-label="add to favorites" onClick={() => addToFavorites(movie)}>
                <Typography
                  variant="p"
                  align="center"
                  fontSize={15}
                  component="div"
                  pr={2}
                  color="white"
                >
                  Add To Favorites:
                </Typography>
                <StarRateIcon sx={{ color: isFavoriteMovie ? 'yellow' : 'white' }} />
              </IconButton>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  )
}
