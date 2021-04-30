import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route,Switch } from 'react-router-dom';
import routes from "./routes";
// import HomePage from "./pages/HomePage/HomePage";
// import MoviePage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from './pages/NotFoundView/NotFoundView';
import LoaderSpinner from "./components/Loader/Loader";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-view" */ ))

const MoviePage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage.js' /* webpackChunkName: "movie-view" */ ))

const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details" */ ))

// import Modal from "./components/Modal/Modal";
// import Searchbar from "./components/Searchbar/Searchbar";
// import Button from "./components/Button/Button";
// import Gallery from "./components/ImageGallery/ImageGallery";
// import getGalleryItems from "./services/pexelsApi";
// const { getFetch } = getGalleryItems;


const App = () => (
  <>
    <AppBar/>

    <Suspense fallback={<LoaderSpinner/>}>
       <Switch>
    <Route exact path={routes.home} component={HomePage} />
    <Route exact path={routes.movies} component={MoviePage} />
    <Route path={routes.movieDetail} component={MovieDetailsPage} />
    <Route component={NotFoundView} />
    </Switch>
   </Suspense>
    
   </>
  
)

// class App extends Component {
//   state = {
//     query: "",
//     page: 1,
//     gallery: [],
//     isLoading: false,
//     error: null,
    
//     // showModal : false
//   }
  
//    componentDidMount() {
//     const { query, page } = this.state;
//     getFetch(query, page)
//       .then((result) => {
//         console.log(result);
//         this.setState({ gallery: [...result] });
//       })
//       .catch((err) => {});
//   }
//    componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (query !== prevState.query) {
//       getFetch(query, page)
//         .then((result) => {
//           console.log(result);
//           this.setState((prev) => ({ gallery: [...prev.gallery, ...result] } ));
//         })
//         .catch((err) => { });
//       this.fetchGallery();
      
//     }
//   }
  
//   getQuery = (query) => {
//     this.setState({query: query, page:1, gallery: [], error: null})
    
//   }

//   fetchGallery = () => {
//     const { query, page, gallery } = this.state;
    
//     this.setState ({isLoading: true})
//       getFetch(query, page)
//         .then((result) => {
//           this.setState({
//             gallery: [...gallery, ...result],
//             page: page + 1,
//           }); 
//         }) .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ isLoading: false }))
    
//     window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
    
//   }

//   render() {
//     const { gallery, isLoading, error, showModal } = this.state
//     const { getQuery } = this;
//     const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
//       return (
//         <div>
//           {error && <h1>Ой ошибка, всё пропало!!!</h1>}
//           <Searchbar getQuery={getQuery} />
//           {isLoading && <h1>Loading...</h1>}
    
//           <Gallery gallery={gallery} getQuery={getQuery} />
//           {isLoading && <LoaderSpinner/>}
//           {shouldRenderLoadMoreButton && (<Button onClick = {this.fetchGallery}/>)}
          
//         </div>
//     );
//   }
// }

  
export default App;
