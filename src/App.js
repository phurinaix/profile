import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Work from './containers/Work/Work';
import Contact from './containers/Contact/Contact';
import ErrorPage from './containers/ErrorPage/ErrorPage';
import Layout from './components/Layout';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <BrowserRouter>
            <Navigation />
            <Layout>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route component={ErrorPage} />
              </Switch>
            </Layout>
          </BrowserRouter>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
      </React.Fragment>
    );
  }
}

export default App;