import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  
  };

  async componentDidMount() {
    const {movieId} = this.props.match.params;
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US`);
    
    console.log(response.data);
    this.setState({ cast:[...response.data]});
  }
  render() {
    return (
      <>
      <h1>страница с актерами </h1>

      <ul>
          {this.state.cast.map(actor => (
              <li key={actor.id}>
                   <Link to={'/movies/:movieId/cast'}>{actor.name}
                  </Link>
              </li>
          ))}
        </ul>
        
       </>
    ) 
      
  };
}
export default Cast;