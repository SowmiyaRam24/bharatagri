

import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import Login from './Components/Login'
import CropList from './Components/CropList';
import './App.css'

const App = () => (
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/crop-list" element={<CropList/>} />
    </Routes>
  

);

export default App;

