import React, { Component } from 'react';
import s from "./Cast.module.css";
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const {movieId} = this.props.match.params;
    console.log(movieId)
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US`);
    console.log(response);
    console.log(response.data);
    console.log(response.data.cast);
      this.setState({ actors: response.data.cast});
  }
  render() {
    
    return (
      <>
      <h1>страница с актерами </h1>
      
      <ul className={s.actorsList}>
          {this.state.actors.map(({ id, name, profile_path, character}) => (
             <li key={id} className={s.actorsItem}>
               <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} width="100" alt="{name}" />
              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      
           
       </>
    ) 
      
  };
}
export default Cast;