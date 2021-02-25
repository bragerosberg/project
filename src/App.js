import React from 'react';
import { HashRouter as Routes, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/';
import './index.css';

const App = () => (
  <Routes basename="/">
    <div>

      <nav className="navbar__routes">

        <ul>
{/* 
          <li><Link to="/">Hjem</Link></li>

          <li><Link to="/meny">Meny</Link></li>

          <li><Link to="/bilder">Bilder</Link></li>

          <li><Link to="/corona">Corona</Link></li>

          <li><Link to="/om-oss">Om oss</Link></li> */}

        </ul>

      </nav>

      <Switch>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  </Routes>
);

export default App;
