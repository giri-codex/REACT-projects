import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:query" element={<MovieList />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  )
}
