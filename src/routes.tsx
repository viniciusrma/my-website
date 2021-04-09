import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/" exact component={Main} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/skills" exact component={Skills} />
    </Switch>
  );
};

export default Routes;