import React, { Component } from 'react';
import s from "./MovieDetailsPage.module.css";
import Axios from 'axios';
import Cast from '../../components/Cast/Cast';
import Reviews from "../../components/Reviews/Reviews";
import { Route, NavLink, Switch } from 'react-router-dom';
import MovieItem from '../../components/MovieItem/MovieItem';

class MovieDetailsPage extends Component {
  state = {
    title: "",
    overview: '',
    poster_path: '',
    vote_average: '',
  
  };

  async componentDidMount() {
    const {movieId} = this.props.match.params;
    console.log(movieId);
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US`);
    console.log(response.data);
    this.setState({ ...response.data });
  }
  render() {
    const {title, overview, poster_path,vote_average, genres}= this.state;
    const { movieId } = this.props.match.params;
    console.log(this.props.match.path)
    return (
      <>
      <h1>страница с детальной информацией о кинофильме {this.props.match.params.movieId}</h1>
        <div className={s.movieCard}>
          <div>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}` } width="300" alt={title} />
        </div>
        <div className={s.movieOverview}>
        <h2>{title}</h2>
        <h2>Overview </h2>
        <p>{overview}</p>
        <h2>Vote Average</h2>
          <p>{vote_average}</p>
        </div>
        </div>
    
        <h2>Additional information</h2>
        <div className={s.linksPages}>
      <NavLink className={s.linksItem} to={`/movies/${movieId}/cast`}>CAST</NavLink>
      <NavLink className={s.linksItem} to={`/movies/${movieId}/reviews`} >REVIEWS</NavLink>
    </div>
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => <Cast {...props} movie={this.state.movie} />}
        />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
       </>
    ) 
      
  };
}
export default MovieDetailsPage;