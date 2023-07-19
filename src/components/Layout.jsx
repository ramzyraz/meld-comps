import React from 'react';
import Navbar from './Navbar';
// import MobileSidebar from '../components/MobileSidebar';

const Layout = ({ children }) => {  
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
