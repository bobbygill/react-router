import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import DogBreed from './DogBreed';
import NotFound from './NotFound';
import Countries from './Countries';
import RockPaperScissors from './RockPaperScissors';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (

<div>
      <div className="sidebar">
        <ul>
          <li><Link to="/dogs/chihuahua">Chihuahua</Link></li>
          <li><Link to="/dogs/poodle">Poodle</Link></li>
          <li><Link to="/rock-paper-scissors">Rock Paper Scissors</Link></li>
          <li><Link to="/countries">Countries</Link></li>
        </ul>
      </div>

      <div className="content">
        <Switch>
          <Route path="/rock-paper-scissors" component={RockPaperScissors} />
          <Route path="/countries" component={Countries} />
          <Route path="/dogs/:breed" component={DogBreed} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>

      </div>
    );
  }
}

export default withRouter(App);
