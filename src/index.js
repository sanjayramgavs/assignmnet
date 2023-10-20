import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import HomePage from './Assignmentsqlandextra/HomePage';
import { BrowserRouter } from 'react-router-dom';
import StudentListAndForm from './CRUD/StudentListAndForm';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StudentListAndForm />
  </BrowserRouter>

);
reportWebVitals();
