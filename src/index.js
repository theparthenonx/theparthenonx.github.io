import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home'
import Consulting from './consulting';
import AnalyticsBeta from './AnalyticsBeta';
import './sass/style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Root from './root';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />}/>
          <Route path='/consulting' element={<Consulting />}/>
          <Route path='/AnalyticsBeta' element={<AnalyticsBeta />}/>
        </Route>
      </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
