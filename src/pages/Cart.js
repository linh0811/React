import React from 'react';
import { useShoppingContext } from '../contexts/ShoppingCart';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cartItems, cartQty, totalPrice, increaseQty, decreaseQty, removeCartItem } = useShoppingContext();

  return (
    <main>
      <section>
        <div className="container1">
          <div className="cart-left">
            <h3>Giỏ Hàng</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Sản phẩm</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item._id}>
                    <td>
                      <i 
                        className="fa-regular fa-trash"
                        onClick={() => removeCartItem(item._id)}
                        style={{ cursor: 'pointer' }}
                      ></i>
                    </td>
                    <td><img src={`./img/${item.image}`} alt={item.name} className="product-image" /></td>
                    <td>{item.name}</td>
                    <td className="gia">{item.price}₫</td>
                    <td>
                      <input 
                        type="number" 
                        value={item.qty} 
                        min="1"
                        onChange={(e) => {
                          const newQty = parseInt(e.target.value, 10);
                          if (newQty > item.qty) {
                            increaseQty(item._id);
                          } else {
                            decreaseQty(item._id);
                          }
                        }}
                      />
                    </td>
                    <td className="gia">{item.price * item.qty}₫</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-right">
            <div className="cart-summary">
              <h2>Cộng giỏ hàng</h2>
              <div className="summary-item">
                <span>Tạm tính</span>
                <span className="gia">{totalPrice}₫</span>
              </div>
              <div className="summary-item total">
                <span>Tổng Tiền</span>
                <span className="gia">{totalPrice}₫</span>
              </div>
            <Link to='/payment'>
                <button className="checkout-button">Thanh toán</button>
                </Link>  
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
