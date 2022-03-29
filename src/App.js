import React from 'react';

import { About, Footer, Header, Skills } from './container/index.js';

import './App.scss';
import { Navbar } from './components';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    {/* <Work /> */}
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
