import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchById } from '../api'
import '../Cssfile/MovieDetails.css'

export default function MovieDetails() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    let mounted = true
    fetchById(imdbID).then(data => { if (mounted) setMovie(data) }).catch(console.error)
    return () => { mounted = false }
  }, [imdbID])

  if (!movie) return <div className="container"><p>Loading...</p></div>

  return (
    <div className="container" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <div style={{ width: 340 }}>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'} alt={movie.Title} style={{ width: '100%', borderRadius: 8 }} />
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ color: '#007bff' }}>{movie.Title} ({movie.Year})</h1>
        <p style={{ color: '#666' }}>{movie.Genre} • {movie.Runtime} • {movie.Language}</p>
        <p style={{ marginTop: 12 }}>{movie.Plot}</p>

        <div style={{ marginTop: 14 }}>
          <strong>Director:</strong> {movie.Director} <br/>
          <strong>Actors:</strong> {movie.Actors} <br/>
          <strong>IMDB Rating:</strong> {movie.imdbRating}
        </div>
      </div>
    </div>
  )
}
