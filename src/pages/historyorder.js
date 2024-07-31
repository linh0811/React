import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrderHistory } from '../services/OrderService'; // Giả định bạn có một API để lấy lịch sử đơn hàng

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderHistory = await getOrderHistory();
        setOrders(orderHistory);
      } catch (error) {
        console.error('Error fetching order history', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <main>
      <h1>Lịch sử mua hàng</h1>
      <table>
        <thead>
          <tr>
            <th>Đơn hàng</th>
            <th>Ngày đặt hàng</th>
            <th>Tổng tiền</th>
            <th>Chi tiết đơn hàng</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <React.Fragment key={order.id}>
              <tr className="order">
                <td>#{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.totalPrice}₫</td>
                <td>
                  <button className="btn toggle-details">Xem chi tiết</button>
                </td>
              </tr>
              <tr className="details">
                <td colSpan="4">
                  <div>
                    <p><strong>Sản phẩm:</strong> {order.products.join(', ')}</p>
                    <p><strong>Địa chỉ giao hàng:</strong> {order.address}</p>
                    <p><strong>Phương thức thanh toán:</strong> {order.paymentMethod}</p>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <Link to="/" className="btn">Trở về trang chủ</Link>

      <script>
        {`
          document.querySelectorAll('.toggle-details').forEach(button => {
            button.addEventListener('click', function() {
              const detailsRow = this.closest('tr').nextElementSibling;
              detailsRow.classList.toggle('active');
              this.textContent = detailsRow.classList.contains('active') ? 'Ẩn chi tiết' : 'Xem chi tiết';
            });
          });
        `}
      </script>
    </main>
  );
};

export default OrderHistory;
