import React from 'react'
import { Navbar } from '../components/Navbar';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

export const Cart = () => {
  return (
    <div>
        <Navbar />
        <CartItem />
        <Footer />
    </div>
  );
}
