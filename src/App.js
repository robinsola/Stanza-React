import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path = '/' component={Splash} />
            <Route path = '/searchform' component={SearchForm} />
          </Switch>
        </div>
    );
  }
}

export default App;
