import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import "../../_metronic/_assets/sass/pages/EditAccount/EditAccount.scss";

export const AddAccount = () => {
  return (
    <div className="row">
      <div className="col-lg-2">
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
      <div className="col-lg-10">
        <div className="card card-custom card-transparent">
          <div className="card-body p-0">
            <div
              className="wizard wizard-4"
              id="kt_wizard"
              data-wizard-state="first"
              data-wizard-clickable="true"
            >
              <div className="wizard-nav">
                <div className="wizard-steps">
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state="card card-custom card-shadowless rounded-top-0"
                  >
                    <div className="wizard-wrapper">
                      <div className="wizard-number">1</div>
                      <div className="wizard-label">
                        <div className="wizard-bold wizard-primary">
                          Thông tin
                        </div>
                        <div className="wizard-desc d-none d-lg-block">
                          Cập nhật thông tin cá nhân
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state="current"
                  >
                    <div className="wizard-wrapper">
                      <div className="wizard-number">2</div>
                      <div className="wizard-label">
                        <div className="wizard-bold">Tài khoản</div>
                        <div className="wizard-desc d-none d-lg-block">
                          Tên đăng nhập và mật khẩu
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state="pending"
                  >
                    <div className="wizard-wrapper">
                      <div className="wizard-number">3</div>
                      <div className="wizard-label">
                        <div className="wizard-bold">Phân quyền</div>
                        <div className="wizard-desc d-none d-lg-block">
                          Cấp quyền truy cập hệ thống
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="wizard-step"
                    data-wizard-type="step"
                    data-wizard-state="pending"
                  >
                    <div className="wizard-wrapper">
                      <div className="wizard-number">4</div>
                      <div className="wizard-label">
                        <div className="wizard-bold">Cài đặt</div>
                        <div className="wizard-desc d-none d-lg-block">
                          Cấu hình ngày công, lương
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-custom card-shadowless rounded-top-0">
                <div className="card-body p-0">
                  <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                    <div className="col-xl-12 col-xxl-10">
                      <form
                        className="form fv-plugins-bootstrap fv-plugins-framework"
                        id="kt_form"
                      >
                        <div className="row justify-content-center">
                          <div className="col-xl-9">
                            <div
                              className="my-5 step"
                              data-wizard-type="step-content"
                              data-wizard-state="current"
                            >
                              <h5 className="text-dark font-weight-bold mb-10 offset-3">
                                Tài khoản
                              </h5>

                              <div className="form-group row fv-plugins-icon-container">
                                <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                  Tên đăng nhập
                                </label>
                                <div className="col-lg-9 col-xl-9 col-sm-9">
                                  <input
                                    className="form-control form-control-solid"
                                    name="firstname"
                                    type="text"
                                    defaultValue="Trung Hiếu"
                                  />
                                  <div className="fv-plugins-message-container" />
                                </div>
                              </div>
                              <div className="form-group row fv-plugins-icon-container">
                                <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                  Mật khẩu
                                </label>
                                <div className="col-lg-9 col-xl-9 col-sm-9">
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

                              <div className="form-group row fv-plugins-icon-container">
                                <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                  Mật khẩu mới
                                </label>
                                <div className="col-lg-9 col-xl-9 col-sm-9">
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

                              <div className="form-group row fv-plugins-icon-container">
                                <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                  Xác nhận
                                </label>
                                <div className="col-lg-9 col-xl-9 col-sm-9">
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
                            </div>
                            <div className="row d-flex justify-content-end py-10">
                              <div className="col-5 pr-0">
                                <div className="btn-wrap d-flex justify-content-end">
                                  <button className="btn btn-clean btn-sm px-9 py-4 font-weight-bold mr-2">
                                    Quay lại
                                  </button>
                                  <button className="btn btn-primary btn-sm font-weight-bold px-9 py-4">
                                    Tiếp theo
                                  </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
