import React from 'react';
import './MoviesPage.module.css';

const MoviesPage = ({ imgUrl, title }) => (
  <div class="card">
    <div className="BookPreview-thumb">
      <img src={imgUrl} class="card-img-top" alt={title} />
    </div>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
    </div>
  </div>
);

export default MoviesPage;