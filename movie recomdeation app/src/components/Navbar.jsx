import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #e3e6ea',
      padding: '10px 20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/"><h2 style={{ color: '#007bff' }}>MovieHunt</h2></Link>
          <Link to="/favorites" style={{ color: '#007bff' }}>Favorites</Link>
        </div>

        <div style={{ flex: 1, maxWidth: 540 }}>
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={() => {
              if (query.trim()) navigate(`/movies/${encodeURIComponent(query.trim())}`)
            }}
          />
        </div>
      </div>
    </nav>
  )
}
