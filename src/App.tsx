import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
