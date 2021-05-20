import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import '../../_metronic/_assets/sass/pages/EditDecentral/EditDecentral.scss'

export const EditDecentral = () => {
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
        <div className="decentral-wrap">
          <div className="card-header card-header-tabs-line pb-0">
            <div className="card-toolbar">
              <ul className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-edit-contact">
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
                  <a className="nav-link" data-toggle="tab" href="#">
                    <span className="nav-icon">
                      <span className="svg-icon">
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
                  <a className="nav-link active" data-toggle="tab" href="#">
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
          <div className="branch">
            <div className="branch-content text-center">
              <h3 className="branch-title text-uppercase text-white">
                Chi nhánh
              </h3>
              <div
                class="mt-10 d-flex justify-content-center btn-wrap flex-column flex-lg-row w-100 w-lg-auto"
                role="group"
              >
                <button
                  type="button"
                  class="btn btn-primary round-radius btn-lg font-weight-bold active mb-3 mb-lg-0"
                >
                  Hà Nội
                </button>
                <button
                  type="button"
                  class="btn btn-white btn-hover-primary btn-lg mr-0 mr-lg-1 mb-3 mb-lg-0 text-color btn-color border-0 font-weight-boldest"
                >
                  Hồ Chí Minh
                </button>
                <button
                  type="button"
                  class="btn btn-white btn-hover-primary btn-lg text-color btn-color border-0 font-weight-boldest"
                >
                  Đà Nẵng
                </button>
              </div>
            </div>
          </div>

          <div className="manager-decentral">
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-end border-bottom py-2">
                <div className="col-lg-2 pr-0 col-sm-3">
                  <div className="check-decentral pl-sm-10 pl-lg-0">
                    <label className="checkbox">
                      <input type="checkbox" checked="checked" />
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
                <div className="col-lg-3 col-sm-3 pl-0">
                  <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                    Quản lý khách hàng
                  </h5>
                </div>
                <div className="col-lg-7 col-sm-6 pl-0">
                  <p className="desc m-0 font-weight-bold pl-0">
                    Tạo mới khách hàng, đơn hàng, đặt lịch dịch vụ, thanh toán,
                    ...
                  </p>
                </div>
                <div className="col-lg-2 pr-0 col-sm-3">
                  <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                    <label className="checkbox">
                      <input type="checkbox" checked="checked" />
                      <span></span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm font-weight-boldest"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
                <div className="col-lg-3 pl-0 col-sm-3">
                  <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                    Quản lý kho
                  </h5>
                </div>
                <div className="col-lg-7 col-sm-6 pl-0">
                  <p className="desc m-0 font-weight-bold pl-0">
                    Nhập xuất kho sản phẩm thương mại, quản lý vật liệu tiêu hao
                    khi làm dịch vụ, ...
                  </p>
                </div>
                <div className="col-lg-2 pr-0 col-sm-3">
                  <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm font-weight-boldest"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
                <div className="col-lg-3 pl-0 col-sm-3">
                  <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                    Quản lý thu - chi
                  </h5>
                </div>
                <div className="col-lg-7 col-sm-6 pl-0">
                  <p className="desc m-0 font-weight-bold pl-0">
                    Quản lý quỹ, tạo mới thu chi tại chi nhánh, thu chi nhân sự
                    tính toán lương nhân viên, ...
                  </p>
                </div>
                <div className="col-lg-2 pr-0 col-sm-3">
                  <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                    <label className="checkbox">
                      <input type="checkbox" checked="checked" />
                      <span></span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm font-weight-boldest"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
                <div className="col-lg-3 pl-0 col-sm-3">
                  <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                    Kĩ thuật viên
                  </h5>
                </div>
                <div className="col-lg-7 col-sm-6 pl-0">
                  <p className="desc m-0 font-weight-bold pl-0">
                    Nhân viên làm dịch vụ cho khách hàng.
                  </p>
                </div>
                <div className="col-lg-2 pr-0 col-sm-3">
                  <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm font-weight-boldest"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
                <div className="col-lg-3 pl-0 col-sm-3">
                  <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                    Quản lý chi nhánh
                  </h5>
                </div>
                <div className="col-lg-7 col-sm-6 pl-0">
                  <p className="desc m-0 font-weight-bold pl-0">
                    Thống kê báo cáo hoạt động của chi nhánh, ...
                  </p>
                </div>
                <div className="col-lg-2 pr-0 col-sm-3">
                  <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-light-primary btn-sm font-weight-boldest"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decentral-item px-16 text-size bg-white">
              <div className="row d-flex align-items-center justify-content-center border-bottom py-10">
                <div className="col-lg-6 col-sm-6 pl-0">
                    <button type="button" className="btn btn-primary mr-2">Lưu thay đổi</button>
                    <button type="button" className="btn btn-clean">Quay lại</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
