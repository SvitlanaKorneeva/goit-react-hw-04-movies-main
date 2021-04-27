import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  
  };

  async componentDidMount() {
    const {movieId} = this.props.match.params;
    console.log(movieId)
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US`);
    console.log(response.data);
    this.setState({ cast: response.data});
  }
  render() {
    const {cast}= this.state;
    console.log(cast);
    console.log(cast.this.name);
    return (
      <>
      <h1>страница с актерами </h1>
      
      <ul>
          {cast.map(({name}) => {
             return (
                 <li>
                     {name}
                 </li>
             )
          })}
        </ul>
      
           
       </>
    ) 
      
  };
}
export default Cast;