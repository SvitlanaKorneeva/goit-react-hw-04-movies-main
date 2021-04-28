import React from "react";
import s from "./MovieItem.module.css";
import { v4 as genId } from "uuid";


const MovieItem = ({ movies }) => {
    return (
        <>
        <ul>
          {movies.map(({poster_path, title, overview, vote_average})=> (
            <li key key={genId()} className={s.ImageGalleryItem}>  
            <h2>{title}</h2>
<div className={s.movieCard}>
  <div>
  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}` } width="300" alt={title} />
</div>
<div className={s.movieOverview}>
<h2>Overview </h2>
<p>{overview}</p>
<h2>Vote Average</h2>
  <p>{vote_average}</p>
</div>
</div>
                
            </li>
          ))}
        </ul>
        </>
    )
}

export default MovieItem

// poster_path, title, overview, vote_average