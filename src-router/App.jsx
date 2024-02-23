import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from 'react';
import Home from './Components/Home';
import './App.css';
import About from "./Components/About"
import Product from "./Components/Product";
import Pricing from "./Components/Pricing";
import Cart from "./Components/Cart";
import Heater from "./Components/Heater";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>     
      
    <Router>
      <Heater />

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>


      </Routes>
    </Router>
    <Footer />
    

    </div>
  );
}

export default App
