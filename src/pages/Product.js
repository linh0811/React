import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getProducts, getProductByQuery } from '../services/ProductService';
import { getCatagories } from '../services/CataoryService';
import { useShoppingContext } from '../contexts/ShoppingCart';

const Product = () => {
  const [products, setProducts] = useState([]); // To store all products
  const [productsCate, setProductsCate] = useState([]); // To store products by catagory
  const [Catagories, setCatagories] = useState([]); // To store Catagories
  const [searchParams] = useSearchParams(); // To get URL search parameters
  const catagory = searchParams.get('catagory'); // Get catagory from URL
  const keyword = searchParams.get('keyword'); // Get keyword from URL
  const [isDropdownVisible, setDropdownVisible] = useState(false); // For dropdown visibility
  const [selectedcatagory, setSelectedcatagory] = useState(catagory || ''); // Selected catagory

  const { addCartItem} = useShoppingContext();
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Select a catagory from dropdown
  const selectcatagory = (catagory) => {
    setSelectedcatagory(catagory);
    setDropdownVisible(false);
  };

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  // Fetch products by catagory or keyword
  useEffect(() => {
    const fetchProductsByQuery = async () => {
      try {
        if (selectedcatagory) {
          const filteredProducts = await getProductByQuery({ catagory: selectedcatagory });
          setProductsCate(filteredProducts);
        } else if (keyword) {
          const filteredProducts = await getProductByQuery({ keyword: keyword });
          setProductsCate(filteredProducts);
        } else {
          setProductsCate([]);
        }
      } catch (error) {
        console.error('Error fetching products by query', error);
      }
    };
    fetchProductsByQuery();
  }, [selectedcatagory, keyword]);

  // Fetch all Catagories
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

  // Handle adding product to cart
 
  return (
    <main>
      <div className="dropdown1">
        <div className="dropbtn1" onClick={toggleDropdown}>
          Chọn danh mục sản phẩm
        </div>
        {isDropdownVisible && (
          <div id="dropdownContent1" className="dropdown-content1">
            {Catagories.map((item) => (
              <li key={item._id}> {/* Add key prop here */}
                <Link
                  className="listcate"
                  to={`?catagory=${item._id}`}
                  onClick={() => selectcatagory(item._id)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        )}
      </div>

      <div id="selectedcatagory" className="selected-catagory">
        {selectedcatagory && `Danh mục đã chọn: ${Catagories.find(cat => cat._id === selectedcatagory)?.name || ''}`}
      </div>

      <section>
        <div id="listsp">
          <h2>{selectedcatagory ? 'SẢN PHẨM THEO DANH MỤC' : 'SẢN PHẨM '}</h2>
          <div className="data">
            {(selectedcatagory ? productsCate : products).length > 0 ? (
              (selectedcatagory ? productsCate : products).map((product) => (
                <div
                  className="sp"
                  key={product._id} // Add key prop here
                >
                  <img
                    className="image"
                    src={`./img/${product.image}`}
                    alt={product.name}
                  />
                  <div className="name">{product.name}</div>
                  <br />
                  <div className="price">
                    <del>100.000₫</del>
                    {product.price}₫
                  </div>
                  <div className="circle">
                    <span>-50%</span>
                  </div>
                  <div className="sp-overlay">
                    <div className="sp-buttons">
                      <button
                        className="sp-button-1"
                        onClick={() =>  addCartItem(product._id)}>
                        Thêm vào giỏ hàng
                      </button>
                      <Link to={`/product/${product._id}`}>
                        <button className="sp-button">Chi tiết sản phẩm</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Không có sản phẩm để hiển thị</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
