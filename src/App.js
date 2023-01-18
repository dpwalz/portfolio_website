import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div  >
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
