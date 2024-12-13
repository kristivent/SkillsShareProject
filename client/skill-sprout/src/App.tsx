import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default App

/* import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}
  Also need to add code to Home.tsx to connect search results (see Results.tsx file comments)*/