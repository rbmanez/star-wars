import './App.css';
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Characters from '../Characters'
import Navbar from '../Navbar/Navbar'
import CharacterInfo from '../CharacterInfo/CharacterInfo';

function App() {
  return (
     <div data-testid="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/characters'>
              <Characters />
          </Route>
          <Route path='/characterInfo'>
              <CharacterInfo />
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