  import React from 'react';
  import './App.css';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import { Routes, Route } from 'react-router-dom';
  import Home from './pages/Home';
  import ProductDetail from './pages/ProductDetail';
  import Product from './pages/Product';
  import Login from './pages/Login';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

  function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> {/* Trang chủ */}
          <Route path='/products' element={<Product />} /> {/* Trang sản phẩm (có thể hiển thị sản phẩm theo danh mục hoặc tất cả sản phẩm) */}
          <Route path='/product/:id' element={<Login />} /> {/* Trang chi tiết sản phẩm */}
          <Route path='/login' element={<Login />} /> {/* Trang chủ */}
          <Route path='/products/timkiem' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
     
        </Routes>
        <Footer />
      </>
    );
  }

  export default App;
