import React from "react";
import s from "./MovieItem.module.css";
import { v4 as genId } from "uuid";
import { Link } from 'react-router-dom';


const MovieItem = ({ movies }) => {
    return (
        <>
        <ul>
          {movies.map(movie => (
            <li key key={genId()} className={s.ImageGalleryItem}>  
            <Link to={`/movies/${movie.id}`}> {movie.title}
                  </Link>
                
            </li>
          ))}
        </ul>
        </>
    )
}

export default MovieItem

// poster_path, title, overview, vote_average