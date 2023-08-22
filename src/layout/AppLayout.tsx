import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
