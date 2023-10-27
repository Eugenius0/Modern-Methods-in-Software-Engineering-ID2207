import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import EventRequest from './pages/eventRequest/eventRequest';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/eventRequest' element={<EventRequest />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
