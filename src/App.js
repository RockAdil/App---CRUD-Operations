import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
