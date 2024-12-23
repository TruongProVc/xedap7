import React, { useState, useEffect, use } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({
    Address: '',
    CustomerId: 0,
    Email: '',
    Firstname: '',
    Lastname: '',
    Mobile: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('CashOnDelivery');

  // Lấy giỏ hàng từ localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
    calculateTotal(cartData);
  }, []);

  // Lấy thông tin khách hàng từ token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Bạn cần đăng nhập để tiếp tục.');
      window.location.href = '/login';
      return;
    }

    // Gửi yêu cầu lấy thông tin khách hàng
    fetch('http://localhost:3000/api/customer', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không thể lấy thông tin khách hàng.');
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data); 
      })
      .catch((error) => {
        console.error('Lỗi khi lấy thông tin khách hàng:', error);
        alert('Không thể lấy thông tin khách hàng. Vui lòng thử lại.');
      });
  }, []);

  // Tính tổng giá trị giỏ hàng
  const calculateTotal = (cartData) => {
    const total = cartData.reduce((acc, item) => acc + item.Price * item.Quantity, 0);
    setTotalPrice(total);
  };

  // Xử lý khi người dùng thay đổi thông tin
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Xử lý khi nhấn "Thanh toán"
  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Bạn cần đăng nhập để thanh toán.');
      window.location.href = '/login';
      return;
    }

    const checkoutData = {
      userInfo,
      cart,
      paymentMethod,
      totalPrice
    };

    // Gửi yêu cầu thanh toán đến server
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkoutData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Đã xảy ra lỗi khi thanh toán.');
        }
        return response.json();
      })
      .then((data) => {
        alert('Thanh toán thành công!');
        localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi thanh toán
        window.location.href = '/orders'; // Chuyển đến trang danh sách đơn hàng
      })
      .catch((error) => {
        console.error('Lỗi khi thanh toán:', error);
        alert('Đã xảy ra lỗi khi thanh toán. Vui lòng thử lại.');
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Thông tin người dùng */}
      <div>
        <label>Họ tên</label>
        <input
          type="text"
          name="name"
          value={userInfo.Lastname + userInfo.Firstname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userInfo.Email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Địa chỉ</label>
        <input
          type="text"
          name="address"
          value={userInfo.Address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value={userInfo.Mobile}
          onChange={handleInputChange}
        />
      </div>
      {/* Giỏ hàng */}
      <div>
        <h3>Giỏ hàng</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.ProductId}>
              {item.ProductName} - {item.Quantity} x {item.Price.toLocaleString()} VNĐ
            </li>
          ))}
        </ul>
        <p>Tổng tiền: {totalPrice.toLocaleString()} VNĐ</p>
      </div>

      {/* Phương thức thanh toán */}
      <div>
        <label>Phương thức thanh toán</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="CashOnDelivery">Thanh toán khi nhận hàng</option>
          <option value="CreditCard">Thanh toán bằng thẻ</option>
        </select>
      </div>

      {/* Nút thanh toán */}
      <button onClick={handleCheckout}>Thanh toán</button>
    </div>
  );
};

export default Checkout;
