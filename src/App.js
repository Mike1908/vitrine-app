import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1, Project2, Project3} from './pages/Projects';

const App = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/project-1" component={Project1} ></Route>
        <Route exact path="/project-2" component={Project2} ></Route>
        <Route exact path="/project-3" component={Project3} ></Route>
        <Route exact path="/contact" component={Contact} ></Route>
        <Redirect to="/" />
    </Switch>
  );
};

export default App;