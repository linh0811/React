import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShoppingContext } from '../contexts/ShoppingCart';

const Payment = () => {
  const { cartItems, totalPrice } = useShoppingContext();
  const [form, setForm] = useState({
    fullname: '',
    address: '',
    email: '',
    phone: '',
    paymentMethod: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validateForm = () => {
      const isValid = Object.values(form).every(value => value !== '');
      setIsFormValid(isValid);
    };

    validateForm();
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      if (form.paymentMethod === 'bank-transfer') {
        setShowOverlay(true);
      } else {
        navigate('/thanhtoanthanhcong');
      }
    } else {
      alert('Vui lòng điền đầy đủ thông tin thanh toán.');
    }
  };

  return (
    <main>
      <section>
        <div className="container1">
          <div className="payment-left">
            <h2>Thông tin thanh toán</h2>
            <form id="payment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Họ và tên:</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Địa chỉ:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit">Đặt hàng</button>
              </div>
            </form>
          </div>
          <div className="payment-right">
            <table>
              <thead>
                <tr>
                  <th>Tiêu đề sản phẩm</th>
                  <th>Tạm tính</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.price}₫</td>
                  </tr>
                ))}
                <tr>
                  <td><strong>Tạm tính</strong></td>
                  <td><strong>{totalPrice}₫</strong></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <div className="payment-methods">
                      <label htmlFor="bank-transfer">
                        <input
                          type="radio"
                          id="bank-transfer"
                          name="paymentMethod"
                          value="bank-transfer"
                          onChange={handleChange}
                          required
                        />
                        Chuyển khoản ngân hàng
                      </label>
                      <label htmlFor="cash-on-delivery">
                        <input
                          type="radio"
                          id="cash-on-delivery"
                          name="paymentMethod"
                          value="cash-on-delivery"
                          onChange={handleChange}
                          required
                        />
                        Thanh toán khi nhận hàng
                      </label>
                    </div>
                  </td>
                </tr>
                {form.paymentMethod === 'bank-transfer' && (
                  <tr className="bank-transfer-details">
                    <td colSpan="2">
                      Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showOverlay && (
          <div id="overlay" className="overlay">
            <div id="payment-success" className="payment-success">
              <h2>Thanh toán thành công!</h2>
              <img
                src="img/qrcode.jpg"
                alt="QR Code"
                className="qr-code"
                onClick={() => navigate('/thanhtoanthanhcong')}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Payment;
