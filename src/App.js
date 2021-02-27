import React from 'react';
import { HashRouter as Routes, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Covid from './components/covid';
import AboutUs from './components/aboutus';
import './index.css';

const App = () => (
  <Routes basename="/">
    <div>

      <nav className="navbar__routes">

        <ul>

          <li><Link to="/">Sku Bare</Link></li>

          <li><Link to="/covid">Covid</Link></li>

          <li><Link to="/om-oss">Stillinger</Link></li>

        </ul>

      </nav>

      <Switch>

        <Route path="/covid">
          <Covid />
        </Route>

        <Route path="/om-oss">
          <AboutUs />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  </Routes>
);

export default App;
