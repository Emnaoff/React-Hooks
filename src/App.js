import React,{useState} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Filter from './Components/Filter/filter';
import Adding from './Components/Adding/adding';
import MovieList from './Components/MovieList/movieList';
import {Movies} from './Components/movies';
import Footer from './Components/Footer/footer';
import Details from './Components/Details';



function App(props) {

const [movieList,setMovieList]=useState(Movies);

const addMovie =(newMovie) =>{
  setMovieList([...movieList,newMovie]);
}

const [search,setsearch]=useState("");

const [rate,setrate]=useState(2);

  return (
    <div className="App">
      
      <div className="Start">
    <Navbar/>

     <Filter setsearch={setsearch} rate={rate} setrate={setrate}/>
    </div>


    <Switch>

    <Route exact path='/'> <MovieList movieList={movieList}  search={search} rate={rate} /> </Route>
    
    <Route path='/Details/:id' render={ ()=> <Details {...props} what={Movies}/>} /> 
      
    </Switch>



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