import React from "react";
import s from "./MovieLIst.module.css";
import { v4 as genId } from "uuid";
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from "../../components/MoviePreview/MoviePreview";


const MovieLIst = ({ movies, location }) => {
  console.log(movies)
  const imgUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
    return (
        <>
        <ul>
          {movies.map(({id, overview, title, release_date, poster_path }) => (
            <li key key={genId()} >  
              <Link to={{
                pathname: `/movies/${id}`,
                state: {from: location}
              }}>
                <MoviePreview overview={overview} imgUrl={imgUrl} title={title}/>
      
                {release_date}
  
                {/* <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="250" /> */}
                  </Link>
                
            </li>
          ))}
        </ul>
        </>
    )
}

export default withRouter (MovieLIst)

// poster_path, title, overview, vote_average