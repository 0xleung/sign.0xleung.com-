import React, {FC} from 'react';
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';


import './App.css';

import Sign from './pages/sign/sign';


const App: FC = () => {
  return (
    <>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Sign />} />
      </Routes>
    </>
  );
}

export default App;
