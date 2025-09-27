import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBySearch } from '../api'
import Cards from '../components/Cards'
import RecommendationList from '../components/RecommendationList'
import '../Cssfile/Movielist.css'

export default function MovieList() {
  const { query } = useParams()
  const [results, setResults] = useState([])
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'))

  useEffect(() => {
    if (!query) return
    let mounted = true
    fetchBySearch(query).then(data => {
      if (!mounted) return
      setResults(data.Search || [])
    }).catch(console.error)
    return () => { mounted = false }
  }, [query])

  function toggleFavorite(movie) {
    const exists = favorites.find(m => m.imdbID === movie.imdbID)
    let next
    if (exists) next = favorites.filter(m => m.imdbID !== movie.imdbID)
    else next = [...favorites, movie]
    setFavorites(next)
    localStorage.setItem('favorites', JSON.stringify(next))
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: 8 }}>Results for "{query}"</h2>

      <div className="card-container">
        {results.length === 0 && <p>No results found.</p>}
        {results.map(movie => (
          <Cards
            key={movie.imdbID}
            movie={movie}
            onToggleFavorite={toggleFavorite}
            isFavorited={!!favorites.find(f => f.imdbID === movie.imdbID)}
          />
        ))}
      </div>

      <h3 style={{ marginTop: 20 }}>Recommended (based on first result genre)</h3>
      <RecommendationList baseResults={results} onToggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  )
}
