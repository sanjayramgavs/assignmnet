// src/App.js
import React from 'react';
import { BrowserRouter as  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import About from './about';
import RegistrationForm from './registration';
import Dashboard from './dashboardPage';

function RouteApp() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={Home} />
        </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
