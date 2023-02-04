import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/Layout/Home';
import Layout from './components/Layout/Layout';
import About from './components/pages/About';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <Router >
      <Routes>
        {/* <Route path='/' element={<Layout> <Home /></Layout>} /> */}
        <Route path='/' element={<Layout> <LandingPage /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/login' element={<Layout><Login /></Layout>} />
        <Route path='*' element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>


  );
}

export default App;
