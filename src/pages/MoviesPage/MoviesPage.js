import React, { Component } from 'react';
import Searchbar from "../../components/Searchbar/Searchbar";
import MovieLIst from '../../components/MovieLIst/MovieLIst';
import Axios from 'axios';

class MoviePage extends Component {
  state ={
    query: "",
    movies: [],    
  }

  // async componentDidMount() {
  // const {movies} = this.state;
  // const {query} = this.state;
  // const {movieId} = this.props.match.params;
  // console.log(movies);
  //   console.log(response);
  //   console.log(response.data);
  //   console.log(response.data.results);
  //   this.setState({query: response.data.results} );
  //     }
  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    // console.log(query)
    // console.log(response)
    // console.log(response.data.results);
    if (prevState.query !== this.state.query) {
      const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US&page=1&include_adult=false`);
      this.setState({ movies: response.data.results })
    }
  }
  getQuery = (query) => {
  this.setState({ query: query })
    
  }
  
  render () {
    const { getQuery } = this;
    const { movies, query } = this.state;
    console.log(movies)
  return (
    <>
    <h1>здесь будет список фильмов</h1>
      <Searchbar getQuery={getQuery} />
      {query && <MovieLIst movies={movies}/>}
    
    </>
    
  )
}
}
export default MoviePage;