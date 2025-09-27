import React, { useEffect, useState } from 'react'
import {  fetchById, fetchBySearch } from "../api"; // correct path

import Cards from './Cards'

export default function RecommendationList({ baseResults = [], onToggleFavorite, favorites }) {
  const [recs, setRecs] = useState([])

  useEffect(() => {
    async function buildRecs() {
      if (!baseResults || baseResults.length === 0) {
        setRecs([])
        return
      }
      const first = baseResults[0]
      const details = await fetchById(first.imdbID)
      const genre = details.Genre ? details.Genre.split(',')[0].trim() : null
      if (!genre) {
        setRecs([])
        return
      }
      const search = await fetchBySearch(genre)
      setRecs((search.Search || []).filter(m => m.imdbID !== first.imdbID).slice(0, 6))
    }
    buildRecs()
  }, [baseResults])

  if (!recs || recs.length === 0) return <p style={{ color: '#666' }}>No recommendations yet.</p>

  return (
    <div style={{ marginTop: 8 }}>
      <div className="card-container">
        {recs.map(m => (
          <Cards key={m.imdbID} movie={m} onToggleFavorite={onToggleFavorite} isFavorited={!!favorites.find(f => f.imdbID === m.imdbID)} />
        ))}
      </div>
    </div>
  )
}
