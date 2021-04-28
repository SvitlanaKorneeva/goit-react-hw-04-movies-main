import React, { Component } from 'react';
import s from "./Reviews.module.css";
import Axios from 'axios';

class Reviews extends Component {
    state = {
        reviews: [],
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        console.log(movieId)
        const response = await Axios.get(` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=3edb87365eb5f7934b30e53b3f8713fc&language=en-US&page=1`);
        this.setState({ reviews: response.data.results});
        
    }
        render() {
    
            return (
                <>
        <h1>страница с отзывами </h1>
      
        <ul className={s.reviewsList}>
          {this.state.reviews.map(({ id, author, content}) => (
             <li key={id} className={s.reviewsItem}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      
           
                </>
            )
      
        };
    }

export default Reviews;