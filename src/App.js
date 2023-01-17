import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/Cart/PlaceOrder';
import Checkout from './Components/CheckOut/CheckOut';
import ProductDetails from './Components/Product-Details/ProductDetails';
import Products from './Components/Products/Products';
import Slip from './Components/Slip/Slip';
import Footer from './Service/Footer/Footer';
import NavBar from './Service/NavBar/NavBar';



function App() {

  return (
    <div className="App">

      <NavBar />

      <Routes basename="/e-commerce">
        
       <Route path='/' element={<Products/>} />
        <Route path='/products-details/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeOrder' element={<PlaceOrder/>} />
        <Route path='/checkOut' element={<Checkout />} />

        <Route path='/slip' element={ <Slip />} />
       
    
       
      </Routes>


      <Footer />



    </div>
  );
}

export default App;
