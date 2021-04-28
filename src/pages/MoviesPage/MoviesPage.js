import React, { Component } from 'react';
import Searchbar from "../../components/Searchbar/Searchbar";
import MovieItem from '../../components/MovieItem/MovieItem';
import Axios from 'axios';

class MoviePage extends Component {
  state ={
    query: "",
    movies: [],
    isLoading: false,
    error: null,
        
  }

  // async componentDidMount() {
  // const {movies} = this.state;
  // const {query} = this.state;
  // const {movieId} = this.props.match.params;
  // console.log(movies);
  //   const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieId}&api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US&page=1&include_adult=false`);
  //   console.log(response);
  //   console.log(response.data);
  //   console.log(response.data.results);
  //   this.setState({query: response.data.results} );
  //     }

  //     componentDidUpdate(prevProps, prevState) {
  //     const { query, page } = this.state;
  //     if (prevState.query !== this.state.query) {
  //       this.setState({query: response.data.results} )
  //             }

  getQuery = (query) => {
  this.setState({query: query, movies: [], error: null})
  }
  
  render () {
  const { getQuery } = this;
  return (
    <>
    <h1>здесь будет список фильмов</h1>
    <Searchbar getQuery={getQuery}/>
    <MovieItem movies={this.state.movies } getQuery={getQuery} />
    </>
    
  )
}
}
export default MoviePage;