import React, { useState } from 'react';
import Header from './Header';
import Slidebar from './Slidebar';
import ProductsList from './ProductsList';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';


function Home() {
  
  return (
    <div >
        <Header />
        <Hero />
        
    </div>
  );
}

export default Home;
