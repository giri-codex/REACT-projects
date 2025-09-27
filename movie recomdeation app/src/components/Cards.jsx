import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import '../Cssfile/Cards.css'

export default function Cards({ movie, onToggleFavorite, isFavorited }) {
  if (!movie) return null
  const { Poster, Title, Year, imdbID } = movie

  return (
    <div className="card-col">
      <div className="card">
        <Link to={`/movie/${imdbID}`} className="card-img-wrap">
          <img src={Poster !== 'N/A' ? Poster : '/placeholder.png'} alt={Title} />
        </Link>

        <div className="card-body">
          <h3 className="card-title">{Title}</h3>
          <p className="card-description">{Year}</p>

          <div className="card-footer">
            <Link to={`/movie/${imdbID}`} className="read-btn">Details</Link>
            <button className="fav-btn" onClick={() => onToggleFavorite && onToggleFavorite(movie)}>
              <FaStar className="star-icon" style={{ color: isFavorited ? '#f5c518' : '#bbb' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
