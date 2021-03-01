import React from 'react';
import illustration from '../../assets/bar-header.jpeg';
import './home.css';

const Home = () => (
  <div className="app">
    <h2>Sku Bare</h2>
    <h4>Bar - Scene - Trivsel</h4>
    <img src={illustration} alt="skubba" className="app__illustration" />
    <p>Under utvikling</p>
  </div>
)

export default Home;
