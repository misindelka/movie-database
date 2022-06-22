//external imports
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// internal imports
import './App.css'
import { NavBar } from './components/NavBar'
import { SearchMovie } from './pages/SearchMovie'
import { MovieDetail } from './pages/MovieDetail'
import { FavoriteMovies } from './pages/FavoriteMovies'

function App() {
  const [favoriteMoviesData, setFavoriteMovie] = useState([])
  const favoriteMoviesIds = { ...favoriteMoviesData.map(({ imdbID }) => imdbID) }

  const addToFavorites = movie => {
    setFavoriteMovie([...favoriteMoviesData, movie])
  }

  const removeFromFavorites = id => {
    setFavoriteMovie(favoriteMoviesData.filter(movie => movie?.imdbID !== id))
  }
  // just for ref
  useEffect(() => {
    console.log('favorite movies', favoriteMoviesData, favoriteMoviesIds)
  }, [favoriteMoviesData])

  return (
    <div className="App-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="search" element={<SearchMovie />} />
          <Route
            path="detail"
            element={
              <MovieDetail addToFavorites={addToFavorites} favoriteMoviesIds={favoriteMoviesIds} />
            }
          />
          <Route
            path="favorites"
            element={
              <FavoriteMovies
                favoriteMoviesData={favoriteMoviesData}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
