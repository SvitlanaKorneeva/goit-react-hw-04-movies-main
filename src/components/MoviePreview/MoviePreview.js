import React from 'react';
import './MoviePreview.module.css';

const MoviePreview = ({ imgUrl, title, overview, poster_path }) => (
  <div className="card">
    <div className="BookPreview-thumb">
      {/* <img src={imgUrl} class="card-img-top" alt={title} /> */}
      <img src={imgUrl} alt={title} width="250" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <h5 class="card-title">КИНО Карточка</h5>
      <h5 class="card-title">{overview}</h5>
    </div>
  </div>
);

export default MoviePreview;