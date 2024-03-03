import Quiz from './components/Quiz/Quiz';
import { useEffect, useState } from 'react';
import { jsQuizz } from './constants';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return <Quiz questions={jsQuizz.questions} />;
  
}

export default App
