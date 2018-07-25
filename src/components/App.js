import React from 'react';
import './App.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Splash from './Splash';
import SearchForm from './SearchForm';
import PoemList from './PoemList';
import RandomList from './RandomList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Error404 from './Error404';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path = '/' component={Splash} />
            <Route path = '/searchform' render={()=><SearchForm poems={this.props.poems} inputAuthor={this.props.inputAuthor} inputKeyword={this.props.inputKeyword}/>} />
            <Route path='/poemList' render={()=><PoemList poems={this.props.poems}/>} />
            <Route path='/randomList' render={()=><RandomList randoms={this.props.randoms}/>}/>
            <Route component={Error404}/>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = initialState => {
  return {
    inputAuthor: initialState.inputAuthor,
    inputKeyword: initialState.inputKeyword,
    poems: initialState.poems,
    randoms: initialState.randoms,
  }
}

App.propTypes = {
  inputAuthor: PropTypes.string,
  inputKeyword: PropTypes.string,
  poems: PropTypes.array,
  randoms: PropTypes.array
}

export default withRouter(connect(mapStateToProps)(App));
