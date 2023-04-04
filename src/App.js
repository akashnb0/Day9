// App.js

import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Singers from './components/Singers';
import Albums from './components/Albums';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/singers">Singers</Link></li>
            <li><Link to="/albums">Albums</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/singers" component={Singers} />
          <Route path="/albums" component={Albums} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
