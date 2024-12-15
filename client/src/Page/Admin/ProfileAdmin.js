import React from 'react';

const ProfileAdmin = ({ accountInformation, groupName, onPasswordChange }) => {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6" style={{ marginTop: '90px' }}>
                            <h1>Thông tin tài khoản cá nhân</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                                <li className="breadcrumb-item active">Thông tin</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img
                                            className="profile-user-img img-fluid img-circle"
                                            src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                            alt="User profile picture"
                                            style={{ borderRadius: '10%' }}
                                        />
                                    </div>
                                    <h3 className="profile-username text-center">
                                        {accountInformation?.LastName} {accountInformation?.FirstName}
                                    </h3>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>Nhóm tài khoản:</b>
                                            <a className="float-right text-decoration-none c-black">{groupName}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home"
                                                type="button"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                Thông tin
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Đổi mật khẩu
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-body">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-2 col-form-label">Tên đăng nhập</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={accountInformation?.Username}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-2 col-form-label">Email</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={accountInformation?.Email}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-2 col-form-label">Thời gian tạo</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={accountInformation?.CreateAt}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-2 col-form-label">Số điện thoại</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={accountInformation?.Phone}
                                                    />
                                                </div>
                                            </div>
                                            {/* Additional fields */}
                                            <button type="submit" className="btn btn-success">Lưu</button>
                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        >
                                            <form id="form_changePW">
                                                <div className="form-group row mb-3">
                                                    <label className="col-sm-2 col-form-label">Mật khẩu cũ</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row mb-3">
                                                    <label className="col-sm-2 col-form-label">Mật khẩu mới</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row mb-3">
                                                    <label className="col-sm-2 col-form-label">Nhập lại mật khẩu mới</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Add additional password fields */}
                                                <button
                                                    type="button"
                                                    onClick={onPasswordChange}
                                                    className="btn btn-success"
                                                >
                                                    Lưu
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileAdmin;
