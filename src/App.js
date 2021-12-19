import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1, Project2, Project3,Project4,Project5} from './pages/Projects';

const App = () => {
  return (
    <Switch>
        <Route exact path="/vitrine-app/" component={Home} ></Route>
        <Route exact path="/vitrine-app/project-1" component={Project1} ></Route>
        <Route exact path="/vitrine-app/project-2" component={Project2} ></Route>
        <Route exact path="/vitrine-app/project-3" component={Project3} ></Route>
        <Route exact path="/vitrine-app/project-4" component={Project4} ></Route>
        <Route exact path="/vitrine-app/project-5" component={Project5} ></Route>
        <Route exact path="/vitrine-app/contact" component={Contact} ></Route>
        <Redirect to="/vitrine-app/" />
    </Switch>
  );
};

export default App;