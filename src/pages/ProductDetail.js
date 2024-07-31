import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getProduct, getProductsHot, getProductsNew, getProductsBuy } from '../services/ProductService';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
const {id}= useParams();
    const [product, setProduct] = useState([null]);
    const [activeTab, setActiveTab] = useState('description');

    const showTab = (tabId) => {
        setActiveTab(tabId);
    };

    const chonanh = (index) => {
        // Logic để thay đổi ảnh
        console.log('Chọn ảnh:', index);
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const allProducts = await getProduct(id);
                setProduct(allProducts);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };
        fetchProduct();
    }, [id]);
    if (!product) {
        return ('<div>Loading</div>')
    }

    return (
        <main>
            <section className="chitiet">
                <div className="detail">
                    <div className="imgleft">
                        <div className="inner" id="anhjs">
                            <img id="ab" src={`../img/${product.image}`} alt={product.name} width="100px"  />
                            <div className="imgSmall">
                                <img onClick={() => chonanh(0)} src="../img/anh1.webp" alt="Thumbnail 1" />
                                <img onClick={() => chonanh(1)} src="../img/anh1.webp" alt="Thumbnail 2" />
                                <img onClick={() => chonanh(2)} src="../img/anh1.webp" alt="Thumbnail 3" />
                                <img onClick={() => chonanh(3)} src="../img/anh1.webp" alt="Thumbnail 4" />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h1>{product.name}</h1>
                        <p className="gia">
                            <del>990.000₫</del>{product.price}
                        </p>
                        <p className="ttct">
                            Bánh Xoài Cam Lâm – Sản phẩm sử dụng 100% giống Xoài đặc sản vùng Cam Lâm – Khánh Hoà, được canh tác theo hướng thuận tự nhiên. Hương vị, màu sắc và thành phần dinh dưỡng của sản phẩm có thể thay đổi nhẹ theo mùa. Nhưng đừng lo, CAMLAMONLINE luôn đóng gói sản phẩm với chất lượng cao nhất.
                            Bánh Xoài với hương a chua – ngọt thanh – thơm nức của xoài. Ăn vào dẻo dẻo – dai dai rất lạ miệng.
                        </p>
                        <invị chuput type="number" value="1" className="soluong" />
                        <button className="themgh">Thêm vào giỏ hàng</button>
                        <br />
                        <p>Danh mục: Sản Phẩm Hot<br /> Từ khóa: 2024, Xoai, <br /> Bánh xoài</p>
                    </div>
                </div>
            </section>

            <div className="container1">
                <div className="button-container">
                    <p className="tab-button" onClick={() => showTab('description')}>
                        Mô tả
                    </p>
                    <p className="tab-button" onClick={() => showTab('reviews')}>
                        Đánh giá
                    </p>
                </div>

                <div id="description" className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                    <h2>Mô tả</h2>
                    <p><strong>Thông tin sản phẩm:</strong></p>
                    <ul>
                        <li>Xuất xứ: Cam Lâm</li>
                        <li>Kích thước hộp: Hộp nhựa</li>
                        <li>Thành phần: Xoài 95%</li>
                        <li>HSD: 18 tháng</li>
                    </ul>
                    <p><strong>Cách sử dụng:</strong> Ăn trực tiếp</p>
                    <p><strong>Bảo quản:</strong> Nơi không ráo, tránh tiếp xúc trực tiếp đến ánh nắng mặt trời</p>
                    <p><strong>Lưu ý:</strong> Không sử dụng sản phẩm hết hạn và có dấu hiệu móc hỏng.</p>
                </div>

                <div id="reviews" className={`tab-content ${activeTab === 'reviews' ? 'active' : ''}`}>
                    <h2>Đánh giá</h2>
                    <p>Chưa có đánh giá nào.</p>
                    <div className="review">
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p>Rất tốt! Sản phẩm đúng như mô tả.</p>
                    </div>
                    <form className="review-form">
                        <div className="form-group">
                            <label htmlFor="name">Tên:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Nhận xét của bạn:</label>
                            <textarea id="comment" name="comment" rows="4" required></textarea>
                        </div>
                        <button type="submit">Gửi đánh giá</button>
                    </form>
                </div>
            </div>

            <section id="listsp">
                <h2>SẢN PHẨM TƯƠI TƯƠI</h2>
                <div className="data" id="data">
                    <div className="sp" idsp="1" gia="550000">
                        <img className="image" src="../img/anh1.webp" alt="Product 1" />
                        <div className="name">Xoài thái</div>
                        <br />
                        <div className="price" id="gia">
                            <del>1,050,000₫</del> 550,000₫
                        </div>
                        <div className="circle">
                            <span>-50%</span>
                        </div>
                        <div className="sp-overlay">
                            <div className="sp-buttons">
                                <button className="sp-button-1" id="themvaogh">Thêm vào giỏ hàng</button>
                                <button className="sp-button">Chi tiết sản phẩm</button>
                            </div>
                        </div>
                    </div>
                    {/* Thêm các sản phẩm tương tự khác ở đây */}
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
