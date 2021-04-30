import React, { Component } from "react";
import { Link } from 'react-router-dom';
import s from "./HomePage.module.css";
// import getFetch from '../../services/filmApi';
import Axios from 'axios';
import MoviePreview from "../../components/MoviePreview/MoviePreview";

class HomePage extends Component {
    state = {
        movieList: [],
    };

    async componentDidMount() {
    const apiKey = `3edb87365eb5f7934b30e53b3f8713fc`;
    const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=3edb87365eb5f7934b30e53b3f8713fc');
    // console.log(response.data.results);
    this.setState({ movieList: [...response.data.results] });
  }
    
    render() {
        console.log(this.props.match.url)
        return (
            <>
            <h1>Trending today</h1>
            <MoviePreview/>
            <ul className={s.movieList}>
                    {this.state.movieList.map(movie => {
               const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    
              return <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                      <div className={s.movieItem}>
                    <img src={imgUrl} alt={movie.title} width="250" />
                      {movie.title} 
                      </div>
                  </Link>
              </li>
          })}
        </ul>
            </>)
    };
}
export default HomePage;