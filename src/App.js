import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
// import Home from './components/Layout/Home';
import Layout from './components/Layout/Layout';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import Services from './components/pages/Services';
import Stories from './components/pages/Stories';


function App() {
  return (
    < div className="bg-gray-50">
      <Router  >
        <Routes>
          {/* <Route path='/' element={<Layout> <Home /></Layout>} /> */}
          <Route path='/' element={<Layout> <LandingPage /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/login' element={<Layout><Login /></Layout>} />
          <Route path='/stories' element={<Layout><Stories /></Layout>} />
          <Route path='/services' element={<Layout><Services /></Layout>} />
          <Route path='/contacts' element={<Layout><Contact /></Layout>} />
          <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
          <Route path='*' element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
