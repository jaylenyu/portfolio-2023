import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import ScrollComponent from './pages/ScrollComponent';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ScrollComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
