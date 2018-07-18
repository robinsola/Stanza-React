import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Router, Route } from 'react-router';
import SearchForm from './SearchForm';
import Splash from './Splash';

class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Splash} />
        </Switch>
      </div>
    );
  }
}

export default Router;
