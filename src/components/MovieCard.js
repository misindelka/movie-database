//external imports
import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Card, CardContent, CardActionArea, Box, Typography, CardMedia } from '@mui/material'

export const MovieCard = ({ movie }) => {
  return (
    <Box
      height="100%"
      m={2}
      borderRadius={4}
      component={RouterLink}
      to="/detail"
      state={{ movie: movie }}
    >
      <Card sx={{ width: 345, height: 450, background: 'black' }}>
        <CardActionArea>
          <CardMedia
            sx={{ maxHeight: 345 }}
            backgroundSize="contain"
            component="img"
            image={movie?.Poster}
            alt="Movie"
          />
          <CardContent
            sx={{ maxHeight: 250, background: 'black', color: 'white', marginTop: '10px' }}
          >
            <Typography component="div" align="center">
              {movie?.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}
