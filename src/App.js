import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import SearchForm from './components/SearchForm';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Splash} />
          <Route path = '/searchform' component={SearchForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
