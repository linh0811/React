import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsHot, getProductsNew, getProductsBuy } from '../services/ProductService';
import { useShoppingContext } from '../contexts/ShoppingCart';

const Home = () => {
  const { addCartItem } = useShoppingContext();

  const [hotProducts, setHotProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [buyProducts, setBuyProducts] = useState([]);

  const arr_hinh = [
    "../img/slide1.png",
    "../img/slide2.png",
    "../img/slide4.png",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % arr_hinh.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + arr_hinh.length) % arr_hinh.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchHotProducts = async () => {
      try {
        const hotProducts = await getProductsHot();
        setHotProducts(hotProducts);
      } catch (error) {
        console.error('Error fetching hot products', error);
      }
    };
    fetchHotProducts();
  }, []);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const newProducts = await getProductsNew();
        setNewProducts(newProducts);
      } catch (error) {
        console.error('Error fetching new products', error);
      }
    };
    fetchNewProducts();
  }, []);

  useEffect(() => {
    const fetchBuyProducts = async () => {
      try {
        const buyProducts = await getProductsBuy();
        setBuyProducts(buyProducts);
      } catch (error) {
        console.error('Error fetching buy products', error);
      }
    };
    fetchBuyProducts();
  }, []);

  return (
    <div>
      <div className="slide">
        <div className="imgslide">
          <img src={arr_hinh[index]} width="100%" height="500px" alt="slide" />
        </div>
        <div className="button">
          <button className="xemngay">Xem ngay</button>
          <span>
            <img src="../img/left.png" onClick={prev} width="50px" height="50px" className="muiten-left" alt="left arrow" />
          </span>
          <span>
            <img src="../img/right.png" onClick={next} width="50px" height="50px" className="muiten-right" alt="right arrow" />
          </span>
        </div>
      </div>

      <main>
        <section>
          <div id="listsp">
            <h2>SẢN PHẨM MỚI</h2>
            <div className="data">
              {Array.isArray(newProducts) && newProducts.length > 0 ? (
                newProducts.map((product) => (
                  <div className="sp" key={product._id}>
                    <img className="image" src={`./img/${product.image}`} alt={product.name} />
                    <div className="name">{product.name}</div>
                    <div className="price"><del>100.000₫</del>{product.price}₫</div>
                    <div className="circle"><span>-50%</span></div>
                    <div className="sp-overlay">
                      <div className="sp-buttons">
                        <button
                          className="sp-button-1"
                          onClick={() => addCartItem(product)}
                        >
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
                <p>Không có sản phẩm mới để hiển thị</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <div id="listsp">
            <h2>SẢN PHẨM NỔI BẬT</h2>
            <div className="data">
              {Array.isArray(hotProducts) && hotProducts.length > 0 ? (
                hotProducts.map((product) => (
                  <div className="sp" key={product._id}>
                    <img className="image" src={`./img/${product.image}`} alt={product.name} />
                    <div className="name">{product.name}</div>
                    <div className="price"><del>100.000₫</del>{product.price}₫</div>
                    <div className="circle"><span>-50%</span></div>
                    <div className="sp-overlay">
                      <div className="sp-buttons">
                        <button
                          className="sp-button-1"
                          onClick={() => addCartItem(product)}
                        >
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
                <p>Không có sản phẩm nổi bật để hiển thị</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <div id="listsp">
            <h2>SẢN PHẨM ĐƯỢC MUA NHIỀU NHẤT</h2>
            <div className="data">
              {Array.isArray(buyProducts) && buyProducts.length > 0 ? (
                buyProducts.map((product) => (
                  <div className="sp" key={product._id}>
                    <img className="image" src={`./img/${product.image}`} alt={product.name} />
                    <div className="name">{product.name}</div>
                    <div className="price"><del>100.000₫</del>{product.price}₫</div>
                    <div className="circle"><span>-50%</span></div>
                    <div className="sp-overlay">
                      <div className="sp-buttons">
                        <button
                          className="sp-button-1"
                          onClick={() => addCartItem(product)}
                        >
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
                <p>Không có sản phẩm được mua nhiều nhất để hiển thị</p>
              )}
            </div>
          </div>
        </section>

        <section id="bv">
          <div id="listsp">
            <h2>Công thức</h2>
            <div className="data1">
              <div className="sp1">
                <div className="image-container">
                  <img src="../img/xoai1.jpg" alt="Image 1" />
                  <img src="../img/xoai2.jpg" alt="Image 2" className="hover-image" />
                </div>
                <div className="ttsp">
                  <h3>Xoài lắc</h3>
                  <b>Công thức làm xoài lắc <br /><br /><br /></b>
                  <button>xem thêm</button>
                </div>
              </div>
              {/* Các công thức khác */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
