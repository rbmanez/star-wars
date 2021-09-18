import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Films from './components/Films'
import Navbar from './components/Navbar'

function App() {
  const [characters, setCharacters] = useState([])
  const [films, setFilms] = useState([])

  useEffect(()=>{
    fetch("https://swapi.dev/api/people/")
      .then(res => {
        return res.json()
      })
      .then(data => setCharacters(data.results))
      
    fetch("https://swapi.dev/api/films/")
      .then(res => res.json())
      .then(data => setFilms(data.results))
    }, [])

  return (
     <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/characters'>
              <Characters characters={characters}/>
          </Route>
          <Route path='/films'>
              <Films films={films}/>
          </Route>
          <Route path='/'>
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;