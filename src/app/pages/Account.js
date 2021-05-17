import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import "../../_metronic/_assets/sass/pages/Account/Account.scss";

export const Account = () => {
    return (
        <div className="row">
            <div className="col-lg-3">
                <ul className="nav flex-column bg-white">
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link active activeCustom"
                            id="home-tab-5"
                            data-toggle="tab"
                            href="#home-5"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon svg-icon-primary">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Thông tin cơ sở</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="profile-tab-5"
                            data-toggle="tab"
                            href="#profile-5"
                            aria-controls="profile"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Thẻ tiền</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <i className="flaticon2-rocket-1" />
                            </span>
                            <span className="nav-text">Cấp bậc nhân viên</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl(
                                            "/media/svg/icons/Communication/Shield-user.svg"
                                        )}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Lương nhân viên</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl(
                                            "/media/svg/icons/Communication/Mail-opened.svg"
                                        )}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Sản phẩm</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl(
                                            "/media/svg/icons/Layout/Layout-top-panel-6.svg"
                                        )}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Cấu hình chuyển đổi</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File.svg")} />
                                </span>
                            </span>
                            <span className="nav-text">Dịch vụ</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl(
                                            "/media/svg/icons/Files/Selected-file.svg"
                                        )}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Phụ phí</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <i className="flaticon2-rocket-1" />
                            </span>
                            <span className="nav-text">Thẻ tiền</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Cấu hình hóa đơn</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <i className="flaticon2-rocket-1" />
                            </span>
                            <span className="nav-text">Kênh kết nối</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a
                            className="nav-link activeCustom"
                            id="contact-tab-5"
                            data-toggle="tab"
                            href="#contact-5"
                            aria-controls="contact"
                        >
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl(
                                            "/media/svg/icons/Communication/Shield-user.svg"
                                        )}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Cài đặt khác</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="card card-custom">
                    <div className="card-header card-header-tabs-line">
                        <div className="card-toolbar">
                            <ul className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x">
                                <li className="nav-item mr-3">
                                    <a className="nav-link" data-toggle="tab" href="#">
                                        <span className="nav-icon">
                                            <span className="svg-icon">
                                                <SVG
                                                    src={toAbsoluteUrl(
                                                        "/media/svg/icons/Design/Layers.svg"
                                                    )}
                                                />
                                            </span>
                                        </span>
                                        <span className="nav-text">Thông tin</span>
                                    </a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a className="nav-link active" data-toggle="tab" href="#">
                                        <span className="nav-icon">
                                            <span className="svg-icon svg-icon-primary">
                                                <SVG
                                                    src={toAbsoluteUrl(
                                                        "/media/svg/icons/General/User.svg"
                                                    )}
                                                />
                                            </span>
                                        </span>
                                        <span className="nav-text">Tài khoản</span>
                                    </a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a className="nav-link" data-toggle="tab" href="#">
                                        <span className="nav-icon">
                                            <span className="svg-icon">
                                                <SVG
                                                    src={toAbsoluteUrl(
                                                        "/media/svg/icons/Communication/Shield-user.svg"
                                                    )}
                                                />
                                            </span>
                                        </span>
                                        <span className="nav-text">Phân quyền</span>
                                    </a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a className="nav-link" data-toggle="tab" href="#">
                                        <span className="nav-icon">
                                            <span className="svg-icon">
                                                <SVG
                                                    src={toAbsoluteUrl(
                                                        "/media/svg/icons/Communication/Mail-opened.svg"
                                                    )}
                                                />
                                            </span>
                                        </span>
                                        <span className="nav-text">Cài đặt</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form">
                            <div className="tab-content">
                                <div className="tab-pane px-7 active">
                                    <div className="tab-content pt-5">
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-lg-9 col-xl-6 offset-3 offset-sm-2 offset-lg-3">
                                                    <h3 className="font-size-h6 mb-10 font-weight-bolder">
                                                        Tài khoản :
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="form-group row align-items-center">
                                                <label
                                                    htmlFor="username"
                                                    className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right"
                                                >
                                                    Họ và tên
                                                </label>
                                                <div className="col-lg-9 col-xl-6 col-9 col-sm-10">
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        class="form-control form-control-solid"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row align-items-center">
                                                <label
                                                    htmlFor="password"
                                                    className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right"
                                                >
                                                    Mật khẩu
                                                </label>
                                                <div className="col-lg-9 col-xl-6 col-9 col-sm-10">
                                                    <div class="input-icon input-icon-right">
                                                        <input
                                                            id="password"
                                                            className="form-control form-control-solid"
                                                            type="password"
                                                        />
                                                        <span className="svg-icon svg-icon-md">
                                                            <SVG
                                                                src={toAbsoluteUrl(
                                                                    "/media/svg/icons/General/Visible.svg"
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="separator separator-dashed"></div>

                                            <div className="row">
                                                <div className="col-lg-9 col-xl-6 offset-3 offset-sm-2 offset-lg-3 mt-7">
                                                    <h3 className="font-size-h6 mb-10 font-weight-bolder">
                                                        Đổi mật khẩu :
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="form-group row align-items-center">
                                                <label
                                                    htmlFor="new-password"
                                                    className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right"
                                                >
                                                    Mật khẩu mới
                                                </label>
                                                <div className="col-lg-9 col-xl-6 col-9 col-sm-10">
                                                    <div class="input-icon input-icon-right">
                                                        <input
                                                            id="new-password"
                                                            className="form-control form-control-solid"
                                                            type="text"
                                                        />
                                                        <span className="svg-icon svg-icon-md">
                                                            <SVG
                                                                src={toAbsoluteUrl(
                                                                    "/media/svg/icons/General/Visible.svg"
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row align-items-center">
                                                <label
                                                    htmlFor="password-confirmation"
                                                    className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right"
                                                >
                                                    Xác nhận
                                                </label>
                                                <div className="col-lg-9 col-xl-6 col-9 col-sm-10">
                                                    <div class="input-icon input-icon-right">
                                                        <input
                                                            id="password-confirmation"
                                                            className="form-control form-control-solid"
                                                            type="password"
                                                        />
                                                        <span className="svg-icon svg-icon-md">
                                                            <SVG
                                                                src={toAbsoluteUrl(
                                                                    "/media/svg/icons/General/Visible.svg"
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer card-footer-border pb-0">
                                        <div className="row">
                                            <div className="col-xl-2" />
                                            <div className="col-xl-7">
                                                <div className="row">
                                                    <div className="col-3" />
                                                    <div className="col-9">
                                                        <a
                                                            href="#"
                                                            className="btn btn-primary font-weight-bold mr-3"
                                                        >
                                                            Lưu
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn btn-clean font-weight-bold"
                                                        >
                                                            Quay lại
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
