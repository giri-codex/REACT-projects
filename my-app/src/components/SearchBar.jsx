import React from 'react'
import '../Cssfile/SearchBar.css'

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="searchbar">
      <input
        className="search-input"
        placeholder="Search movies (e.g. Avengers)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onSearch() }}
      />
      <button className="search-btn" onClick={onSearch}>Search</button>
    </div>
  )
}
