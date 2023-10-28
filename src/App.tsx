import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import EventRequest from './pages/eventRequest/eventRequest';
import Navbar from './components/navbar';
import CreateEventRequest from './pages/createEventRequest/createEventRequest';
import RegisterClient from './pages/registerClient/registerClient';
import EventRequestDetails from './pages/eventRequestDetails/eventRequestDetails';
import TaskDistribution from './pages/taskDistribution/taskDistribution';
import CreateTask from './pages/createTask/createTask';
import ErrorPage from './pages/errorPage/errorPage';
import StaffRecruitment from './pages/staffRecruitment/staffRecruitment';
import CreateRecruitmentRequest from './pages/createRecruitmentRequest/createRecruitmentRequest';
import FinancialRequest from './pages/financialRequest/financialRequest';

export const UserContext = createContext({ userRole: '', setUserRole: (role: string) => {} });

export default function App() {
  const [userRole, setUserRole] = useState('')
  
  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/eventRequest' element={<EventRequest />} />
            <Route path='/createEventRequest' element={<CreateEventRequest />} />
            <Route path='/registerClient' element={<RegisterClient />} />
            <Route path='/eventRequestDetails' element={<EventRequestDetails />} />
            <Route path='/taskDistribution' element={<TaskDistribution />} />
            <Route path='/createTask' element={<CreateTask />} />
            <Route path='/staffRecruitment' element={<StaffRecruitment />} />
            <Route path='/createRecruitmentRequest' element={<CreateRecruitmentRequest />} />
            <Route path='/financialRequest' element={<FinancialRequest />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}
