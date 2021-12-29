import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Filter from './Components/Filter/filter';
import Adding from './Components/Adding/adding';
import MovieList from './Components/MovieList/movieList';
import {movies} from './Components/movies';
import Footer from './Components/Footer/footer';


function App() {
const [movieList,setMovieList]=useState(movies);
const addMovie =(newMovie) =>{
  setMovieList([...movieList,newMovie]);
}

  return (
    <div className="App">

      <div className="Start">
    <Navbar/>
    <Filter/>
    </div>
    <MovieList movieList={movieList} />
    <br/> <br/> <br/>
    <div className="addButton">
    <Adding newMovie={addMovie}/>
    <br/> <br/> <br/> <br/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;