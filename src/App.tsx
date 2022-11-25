import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import { Home } from './pages/HomePage/Home';
import { Header } from './pages/Header/Header';
import { Footer } from './pages/Footer/Footer';
import { Pricing } from './pages/PricingPage/Pricing';
import { Product } from './pages/ProductPage/Product';
import { Contact } from './pages/ContactPage/Contact';

export const App=()=> {
  return (
    <div className="App">
       <Header/>
      <main>
        <Home/>
        <Pricing/>
        <Product/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

