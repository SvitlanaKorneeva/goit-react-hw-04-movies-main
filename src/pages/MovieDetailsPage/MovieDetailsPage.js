import React, { Component } from 'react';
import Axios from 'axios';
import Cast from '../../components/Cast/Cast';
import { Route, NavLink, Switch } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    title: "",
    overview: '',
    poster_path: '',
    vote_average: '',
  
  };

  async componentDidMount() {
    const {movieId} = this.props.match.params;
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US`);
    console.log(response.data);
    this.setState({ ...response.data });
  }
  render() {
    const {title, overview, poster_path,vote_average, genres}= this.state;
    return (
      <>
      <h1>страница с детальной информацией о кинофильме {this.props.match.params.movieId}</h1>
      
        <h2>{title}</h2>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <h2>Overview </h2>
        <p>{overview}</p>
        <h2>Vote Average</h2>
        <p>{vote_average}</p>
        
        <ul>
      <li><NavLink to="/movies/:movieId/cast" >CAST</NavLink></li>
      <li><NavLink to="/movies/:movieId/reviews" >REVIEWS</NavLink></li>
    </ul>
        <Route path="/movies/:movieId/cast" component={Cast} />
       </>
    ) 
      
  };
}
export default MovieDetailsPage;