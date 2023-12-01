import React, { ReactElement, useEffect, useRef, useState } from 'react';
import GlobalStyle from './style/globalStyle';
import Home from './pages/Home'
import ProblemResult from './pages/ProblemResult'
import HeaderBar from './pages/Header'
import './App.css';
import Roadmap from './pages/Roadmap';
import RoadmapDetail from './pages/RoadmapDetail';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div style={{width: '100%', 
                height: '100%'}}>
      <GlobalStyle />
      <BrowserRouter>
          <HeaderBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/problemresult' element={<ProblemResult />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/roadmapdetail' element={<RoadmapDetail />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;