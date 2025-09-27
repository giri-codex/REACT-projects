import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'))

  useEffect(() => {
    const handler = () => setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'))
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  function toggleFavorite(movie) {
    const next = favorites.find(m => m.imdbID === movie.imdbID)
      ? favorites.filter(m => m.imdbID !== movie.imdbID)
      : [...favorites, movie]
    localStorage.setItem('favorites', JSON.stringify(next))
    setFavorites(next)
  }

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? <p>No favorites yet.</p> : (
        <div className="card-container">
          {favorites.map(m => (
            <Cards key={m.imdbID} movie={m} onToggleFavorite={toggleFavorite} isFavorited={true} />
          ))}
        </div>
      )}
    </div>
  )
}
