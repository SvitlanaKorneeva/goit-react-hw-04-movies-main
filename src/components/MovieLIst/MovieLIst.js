import React from "react";
import s from "./MovieLIst.module.css";
import { v4 as genId } from "uuid";
import { Link, withRouter } from 'react-router-dom';


const MovieLIst = ({ movies, location }) => {
  console.log(movies)
    return (
        <>
        <ul>
          {movies.map(movie => (
            <li key key={genId()} >  
              <Link to={{
                pathname: `/movies/${movie.id}`,
                state: {from: location}
              }}>
                {movie.title}
                  </Link>
                
            </li>
          ))}
        </ul>
        </>
    )
}

export default withRouter (MovieLIst)

// poster_path, title, overview, vote_average