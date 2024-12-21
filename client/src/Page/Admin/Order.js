import React, { useState } from 'react';

const Orders = ({ orderStatus, orders }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = '/login'
    throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
  }
  const [status, setStatus] = useState('0');
  const [search, setSearch] = useState('');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', search);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <h5 className="card-title fw-600 mb-4">Lọc danh sách</h5>
                </div>
                <div className="col-lg-6 col-md-6">
                  <select
                    className="form-control"
                    value={status}
                    onChange={handleStatusChange}
                    name="listStatus"
                  >
                    <option value="0">Tất cả</option>

                    {/* {orderStatus.map((statusItem) => (
                      <option key={statusItem.OrderStatusId} value={statusItem.OrderStatusId}>
                        {statusItem.OrderStatusName}
                      </option>
                    ))} */}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <h5 className="card-title fw-600 mb-4">Danh sách đơn hàng</h5>
                </div>
                <div className="col-lg-6 col-md-6">
                  <form id="findOrderForm" onSubmit={handleSearchSubmit}>
                    <div className="searchForm">
                      <input
                        className="form-control"
                        id="searchNameInput"
                        name="name"
                        placeholder="Nhập vào mã khách hàng hoặc đơn hàng để tìm kiếm ..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button type="submit" id="btnSubmit_search" className="btn btn-default">
                        <i className="ti ti-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-post text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4">
                    <tr>
                      <th className='text-center'>
                        <h6 className="fw-600 mb-0">ID</h6>
                      </th>
                      <th className='text-center'>
                        <h6 className="fw-600 mb-0">Khách hàng</h6>
                      </th>
                      <th className='text-center'>
                        <h6 className="fw-600 mb-0">Thời gian</h6>
                      </th>
                      <th className='text-center'>
                        <h6 className="fw-600 mb-0">Áp dụng voucher</h6>
                      </th>
                      <th className='text-center'>
                        <h6 className="fw-600 mb-0">Lệnh</h6>
                      </th>
                      <th className='text-center'>
                        <h6 className="fw-600 mb-0">Trạng thái</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr >
                        <td>sadads</td>
                        <td>áddas</td>
                        <td>áddas</td>
                        <td>áddas</td>
                        <td>
                          <button className='btn btn-danger'>xóa</button>
                        </td>

                        <td>thành công</td>
                      </tr>
                    {/* {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.time}</td>
                        <td>{order.coupon ? 'Đã áp dụng' : 'Chưa áp dụng'}</td>
                        <td>{order.command}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-tools p-5 pt-0 pb-0 m-auto">
              <ul className="pagination pagination-sm" id="pagination"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
