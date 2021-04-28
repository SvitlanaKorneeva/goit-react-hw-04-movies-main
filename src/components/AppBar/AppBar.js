import React from "react";
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from "./AppBar.module.css";



const AppBar = () => {
    return (
        <header className={s.AppBar}>
    <ul className={s.navList}>
      <li><NavLink to={routes.home} >Home</NavLink></li>
      <li><NavLink to={routes.movies} >Movie</NavLink></li>
      {/* <li><NavLink to="/movies/:movieId" >MovieDetail</NavLink></li> */}
    </ul>
        </header>
    )
}

export default  AppBar