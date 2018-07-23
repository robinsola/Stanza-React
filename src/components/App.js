import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import SearchForm from './components/SearchForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path = '/' component={Splash} />
            <Route path = '/searchform' render={()=><SearchForm poems={this.props.results} />} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputKeyword: state.inputKeyword,
    results: state.results,
  }
}

App.propTypes = {
  results: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));
