import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { getCatagories } from '../services/CataoryService';
const toggleDropdown = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
};

const Header = () => {
  const [keyword , setKeyword] =useState("");
  const navigate = useNavigate();
  const [Catagories,setCatagories]= useState([]);
  useEffect(() => {
    const fetchCatagories = async () => {
      try {
        const allCatagories = await getCatagories();
        setCatagories(allCatagories);
      } catch (error) {
        console.error('Error fetching Catagories', error);
      }
    };
    fetchCatagories();
  }, []);
  const onSearch = () => {
    if (keyword.trim()) {
      navigate(`product/timkiem/?keyword=${keyword}`)
    }
}
  return (
    <div className="container">
      <header>
        <img className="logo" src="../img/logo.png" width="300px" alt="Logo" />
       
         <input type="text" className="timkiem" placeholder="Tìm kiếm" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <a onClick={onSearch}><img className="timkiembuton" src="../img/timkiem.png" width="10px" height="5px" alt="Tìm kiếm" /></a>
        <div className="user">
          <ul>
            <li>
             <Link to='/'>Trang Chủ</Link>
             <Link to='/products'>Sản phẩm</Link>
              <Link to='/'>Liên hệ</Link>
              <a href="#">Giới thiệu</a>
              <Link to='/login'>Đăng nhâp</Link>
          <Link to='/cart'>
                <img src="../img/cart.png" width="5px" height="30px" className="giohang" alt="Giỏ hàng" />
                </Link>
            </li>
          </ul>
          <div className="dropdown">
            <div className="icon" onClick={toggleDropdown}>
              <span className="icon-bar">--------</span>
              <span className="icon-bar">---</span>
              <span className="icon-bar">----</span>
            </div>
            <div id="dropdown-menu" className="dropdown-menu">
              <a href="#">Trang chủ</a>
              <a href="#">Giới thiệu</a>
              <a href="#">Sản phẩm</a>
              <a href="#">Tài khoản premium</a>
              <a href="#">Liên hệ</a>
              <a href="#">Thanh toán</a>
              <a href="#">Đăng nhập</a>
              <a href="#">Đăng ký</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
