import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <div style={{ padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
        <h1>Welcome to MovieHunt</h1>
        <p>Search, explore and favorite movies — plus get recommendations.</p>
        <Link to="/movies/Avengers" className="read-btn" style={{ display: 'inline-block', marginTop: 12 }}>Try a sample search</Link>
      </div>
    </div>
  )
}
