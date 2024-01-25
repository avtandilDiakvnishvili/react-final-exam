import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import QuizPage from './components/QuizPage';
import HomePage from './components/HomePage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
