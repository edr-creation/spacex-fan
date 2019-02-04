import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LaunchSingleView from './components/LaunchSingleView';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/launch/:id" component={LaunchSingleView} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
