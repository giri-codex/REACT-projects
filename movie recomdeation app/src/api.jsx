// src/Fetch.jsx
import React, { useEffect, useState } from "react";

const API_KEY = "49e00a83255d65864a21269ea4c9eb40";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export async function fetchPopularMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json(); // { results: [...] }
}

// Fetch movie by ID
export async function fetchById(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movie by ID");
  return res.json();
}


export async function fetchBySearch(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}


export const api= () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
