import React from 'react';

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
