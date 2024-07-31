import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="column">
        <h3>NHỌNG SHOP</h3>
        <p>
          NHONGSHOP là một điểm đến lý tưởng cho những người yêu thích xoài Cam Lâm – loại trái cây nổi tiếng từ vùng đất mộc mạc của Việt Nam. Với cam kết về chất lượng và nguồn gốc, chúng tôi cung cấp một loạt các sản phẩm đa dạng từ xoài Cam Lâm, từ trái tươi ngon đến các sản phẩm chế biến chất lượng cao.
        </p>
      </div>
      <div className="column">
        <h3>DANH MỤC SẢN PHẨM</h3>
        <ul>
          <li>Sản phẩm hot</li>
          <li>Xoài ngọt</li>
          <li>Xoài chua</li>
          <li>Sản phẩm mới</li>
          <li>Sản phẩm nổi bật</li>
        </ul>
      </div>
      <div className="column">
        <h3>CHÍNH SÁCH BÁN HÀNG</h3>
        <ul>
          <li>Phương thức thanh toán</li>
          <li>Phương thức nhận sản phẩm</li>
          <li><a href="csqrt.html">Chính sách quyền riêng tư</a></li>
          <li><a href="csbm.html">Chính sách bảo mật</a></li>
          <li><a href="csmh.html">Chính sách đổi trả</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>Thông tin liên hệ: Shop NHONGSHOP.vn</h3>
        <p>Địa chỉ: Cam Lâm - Khánh Hòa - Việt Nam</p>
        <p>Số điện thoại: 052 306 0080</p>
        <p>Fanpage: <a href="https://www.facebook.com/profile.php?id=100095170848139">Facebook.com/nhongshop</a></p>
      </div>
      <section className="iconft">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-telegram"></i>
      </section>
      <br />
      <section>
        <p>© Copyright by Nhongshop</p>
      </section>
    </footer>
  );
};

export default Footer;
