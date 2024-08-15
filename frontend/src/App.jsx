// import React from 'react'
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/connections/PageNotFound";
import HomePage from "./components/pages/HomePage";
import CartData from "./components/pages/CartData";
import Product from "./components/connections/product/Product";
import Register from "./components/userAuth/Register";
import Login from "./components/userAuth/Login";
import ForgetPassword from "./components/userAuth/ForgetPassword";
import Reset from "./components/userAuth/Reset";
import ProfilePage from "./components/userAuth/ProfilePage";
import ProductDetails from './components/connections/productDetails/ProductDetails';
import CheckOut from "./components/connections/checkOut/CheckOut";
import Order from "./components/connections/order/Order";
import OrderDetails from "./components/connections/order/OrderDetails";



export default function App() {


  return (
    <>
    <div className="bg-blue-200 bg-transparent w-4 h-4 border border-black translate-x-[-50%] translate-y-[-50%]  rounded-full absolute z-50 pointer-events-none " id="movingCursor"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartData />} />
          <Route path="/:labelOne/:labelTwo/:labelThree" element={<Product />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path='/productDetails/:productId' element={<ProductDetails/>}/>
          <Route path='/checkOut/:id' element={<CheckOut/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/orderDetails' element={<OrderDetails/>}/>
          <Route path="*" element={<PageNotFound />} />



          {/* User Authentication Routes: */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/userProfile" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}
