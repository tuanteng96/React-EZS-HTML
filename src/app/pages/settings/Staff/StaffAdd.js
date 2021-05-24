import React from "react";
import "../../../../_metronic/_assets/sass/pages/StaffAdd/StaffAdd.scss";
import "../../../../_metronic/_assets/sass/pages/wizard/wizard-4.scss";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export const StaffAdd = () => {
  return (
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
                data-wizard-state="current"
              >
                <div className="wizard-wrapper">
                  <div className="wizard-number">1</div>
                  <div className="wizard-label">
                    <div className="wizard-bold wizard-primary">Thông tin</div>
                    <div className="wizard-desc d-none d-lg-block">
                      Cập nhật thông tin cá nhân
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
            {/* Thông tin nhân viên */}
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
                            Thông tin nhân viên :
                          </h5>
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 col-sm-3 col-3 col-form-label">
                              Ảnh
                            </label>
                            <div className="col-lg-9 col-xl-9 col-sm-9 col-9">
                              <div className="image-input image-input-outline">
                                <div
                                  className="image-input-wrapper"
                                  style={{
                                    backgroundImage:
                                      "url(https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/blank.png)",
                                  }}
                                />
                                <label
                                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                  data-action="change"
                                  data-toggle="tooltip"
                                  title
                                  data-original-title="Change avatar"
                                >
                                  <i className="fa fa-pen icon-sm text-muted" />
                                  <input
                                    type="file"
                                    name="profile_avatar"
                                    accept=".png, .jpg, .jpeg"
                                  />
                                  <input
                                    type="hidden"
                                    name="profile_avatar_remove"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row fv-plugins-icon-container">
                            <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                              Họ và tên
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
                              Cấp bậc
                            </label>
                            <div className="col-lg-9 col-xl-9 col-sm-9">
                              <select className="form-control form-control-solid selectpicker">
                                <option>Chuyên viên</option>
                                <option>Thiết kế đồ họa</option>
                                <option>Lập trình game</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row fv-plugins-icon-container">
                            <label className="col-xl-3 col-lg-3 col-sm-3 col-4 col-form-label">
                              Trạng thái
                            </label>
                            <div className="col-lg-9 col-xl-9 col-sm-9 col-8">
                              <span className="switch">
                                <label>
                                  <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                    name="select"
                                  />
                                  <span />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="form-group row fv-plugins-icon-container">
                            <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                              Số điện thoại
                            </label>
                            <div className="col-lg-9 col-xl-9 col-sm-9">
                              <div className="input-group input-group-solid">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-phone-alt" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control form-control-solid"
                                  name="phone"
                                  defaultValue="5678967456"
                                  placeholder="Phone"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-group row fv-plugins-icon-container">
                            <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                              Email
                            </label>
                            <div className="col-lg-9 col-xl-9 col-sm-9">
                              <div className="input-group input-group-solid">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-at font-weight-normal" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control form-control-solid"
                                  name="phone"
                                  defaultValue="ngoclb@ezs.vn"
                                  placeholder="Phone"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-lg-between justify-content-sm-between justify-content-center border-top pt-10 mt-15">
                          <div className="mr-2">
                            <button
                              type="button"
                              id="prev-step"
                              className="btn btn-light-primary font-weight-bolder px-9 py-4"
                              data-wizard-type="action-prev"
                            >
                              Previous
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-success font-weight-bolder px-9 py-4"
                              data-wizard-type="action-submit"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              id="next-step"
                              className="btn btn-primary btn-sm font-weight-bolder px-9 py-4"
                              data-wizard-type="action-next"
                            >
                              Tiếp theo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Thông tin nhân viên */}

            {/* Thông tin khoản */}
            <div className="card card-custom card-transparent">
              <div className="card-body p-0">
                <div
                  className="wizard wizard-4"
                  id="kt_wizard"
                  data-wizard-state="first"
                  data-wizard-clickable="true"
                >
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
            {/* phan quyen */}
            <div className="branch">
              <div className="branch-content text-center">
                <h3 className="branch-title text-uppercase text-white">
                  Chi nhánh
                </h3>
                <div
                  class="mt-10 btn-wrap flex-column flex-lg-row w-100 w-lg-auto list-btn"
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
                    class="btn btn-white btn-lg font-weight-bold mb-3 mb-lg-0"
                  >
                    Hồ Chí Minh
                  </button>
                  <button
                    type="button"
                    class="btn btn-white btn-lg font-weight-bold mb-3 mb-lg-0"
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
                      Tạo mới khách hàng, đơn hàng, đặt lịch dịch vụ, thanh
                      toán, ...
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
                      Nhập xuất kho sản phẩm thương mại, quản lý vật liệu tiêu
                      hao khi làm dịch vụ, ...
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
                      Quản lý quỹ, tạo mới thu chi tại chi nhánh, thu chi nhân
                      sự tính toán lương nhân viên, ...
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
                <div className="row d-flex justify-content-end py-10">
                  <div className="col-10 pr-0">
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
            {/* phan quyen */}

            {/* Thông tin nhân viên */}

            {/* cai dat */}
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
                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Lương cơ bản
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <input
                                  className="form-control form-control-solid"
                                  type="text"
                                  defaultValue="9.000.000"
                                />
                              </div>
                            </div>
                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Phụ cấp theo tháng
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <input
                                  className="form-control form-control-solid"
                                  type="text"
                                  defaultValue="500.000"
                                />
                              </div>
                            </div>

                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Phụ cấp theo ngày
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <div class="input-icon input-icon-right">
                                  <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    defaultValue="40.000"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Tỷ lệ hưởng lương làm thêm
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <div class="input-icon input-icon-right">
                                  <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    defaultValue="200%"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Giữ lương
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <span className="switch">
                                  <label>
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                      name="select"
                                    />
                                    <span />
                                  </label>
                                </span>
                              </div>
                            </div>

                            <div className="form-group row">
                              <div className="col-lg-8 col-xl-8 col-sm-9">
                                Tổng giá trị lương tới thời điểm hiện tại:{" "}
                                <span className="font-weight-boldest">
                                  10.000.000VNĐ
                                </span>
                              </div>
                            </div>

                            <div className="separator separator-dashed"></div>

                            <div className="form-group row fv-plugins-icon-container mt-lg-5">
                              <label className="col-xl-3 col-lg-3 col-sm-3 pt-0 col-form-label">
                                Ngày công/Tháng
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <div className="w-75 form-check d-flex justify-content-between align-items-center pl-lg-0">
                                  <label class="radio">
                                    <input type="radio" />
                                    <span className="mr-lg-3"></span>Xác định
                                    theo số ngày công
                                  </label>
                                  <span className="svg-icon">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/icons/Code/Warning-1-circle.svg"
                                      )}
                                    />
                                  </span>
                                </div>
                                <div className="w-75 mt-lg-3 form-check d-flex justify-content-between align-items-center pl-lg-0">
                                  <label class="radio">
                                    <input type="radio" checked="checked" />
                                    <span className="mr-lg-3"></span>Xác định số
                                    ngày nghỉ
                                  </label>
                                  <span className="svg-icon">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/icons/Code/Warning-1-circle.svg"
                                      )}
                                    />
                                  </span>
                                </div>
                                <div class="input-icon input-icon-right mt-lg-2">
                                  <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    defaultValue="--Nhập số ngày--"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Số giờ/ Ngày
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <div class="input-icon input-icon-right">
                                  <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    defaultValue="8"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Số ngày phép
                              </label>
                              <div className="col-lg-9 col-xl-9 col-sm-9">
                                <div class="input-icon input-icon-right">
                                  <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    defaultValue="1"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row align-items-center fv-plugins-icon-container">
                              <label className="col-xl-3 col-lg-3 col-sm-3 col-form-label">
                                Thời gian giữ lương
                              </label>
                              <div className="col-lg-6 col-xl-6 col-sm-9">
                                <div class="input-icon input-icon-right">
                                  <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    defaultValue="12"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-3 col-xl-3 col-sm-9">
                                <span>Tháng</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row justify-content-center">
                  <div className="col-7 col-lg-7 col-sm-9 offset-3 px-7">
                    <button type="button" className="btn btn-primary mr-2">
                      Lưu thay đổi
                    </button>
                    <button type="button" className="btn btn-clean">
                      Quay lại
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-custom card-shadowless rounded-top-0">
              <div className="card-body p-0">
                <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                  <div className="col-xl-12 col-xxl-10 border-bottom">
                    <div className="form fv-plugins-bootstrap">
                      <div className="row justify-content-center">
                        <div className="col-xl-9">
                          <div className="form-group offset-3">
                            <label class="checkbox">
                              <input type="checkbox" checked="checked" />
                              <span className="mr-2"></span>Nhân viên làm theo
                              ca
                            </label>
                          </div>
                          <div className="form-group offset-3">
                            <p>
                              Đi tới
                              <a
                                href="#"
                                className="text-primary font-weight-boldest mx-2"
                              >
                                Bảng phân ca
                              </a>
                              để đăng ký làm việc
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-xxl-10 mt-3 border-bottom">
                    <div className="form fv-plugins-bootstrap">
                      <div className="row justify-content-center">
                        <div className="col-xl-9">
                          <div className="form-group row">
                            <label className="col-lg-3 text-uppercase text-right">
                              Kpi
                            </label>
                            <div className="col-lg-9">
                              <label class="checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="mr-2"></span>Doanh số bán háng
                              </label>
                              <div className="mt-3 row align-items-center">
                                <div className="col-lg-9">
                                  <input
                                    type="text"
                                    className="form-control form-control-solid"
                                    defaultValue="50.000.000"
                                  />
                                </div>
                                <div className="col-lg-3">
                                  <span>VNĐ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-3 text-right">
                              Lương dịch vụ tính từ ca thứ
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                defaultValue="20"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-xxl-10 mt-3">
                    <div className="form fv-plugins-bootstrap">
                      <div className="row justify-content-center">
                        <div className="col-xl-9">
                          <div className="form-group row justify-content-between">
                            <label className="col-lg-6">
                              Lịch sử chấm công
                            </label>
                            <div className="col-lg-6">
                              <a
                                href="#"
                                className="text-primary font-weight-boldest"
                              >
                                Xem chi tiết
                              </a>
                            </div>
                          </div>
                          <div className="offset-3">
                            <div className="timeline timeline-6 mt-3">
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  15/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-warning icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Text*/}
                                <div className="font-weight-bolder text-dark font-size-lg timeline-content pl-3">
                                  In: 08:00 - Out: 19:00
                                </div>
                                {/*end::Text*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  14/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-success icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Content*/}
                                <div className="timeline-content d-flex">
                                  <span className="font-weight-bolder text-dark pl-3 font-size-lg">
                                    In: 08:00 - Out: 19:00
                                  </span>
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  13/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-danger icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Desc*/}
                                <div className="timeline-content font-weight-bolder font-size-lg text-dark pl-3">
                                  In: 08:00 - Out: 19:00
                                </div>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  12/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-primary icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Text*/}
                                <div className="timeline-content font-weight-bolder text-dark font-size-lg pl-3">
                                  In: 08:00 - Out: 19:00
                                </div>
                                {/*end::Text*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  11/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-danger icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Desc*/}
                                <div className="timeline-content font-weight-bolder text-dark pl-3 font-size-lg">
                                  In: 08:00 - Out: 19:00
                                </div>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  10/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-info icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Text*/}
                                <div className="timeline-content font-weight-bolder text-dark font-size-lg pl-3">
                                  In: 08:00 - Out: 19:00
                                </div>
                                {/*end::Text*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="timeline-item align-items-start">
                                {/*begin::Label*/}
                                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                  9/05
                                </div>
                                {/*end::Label*/}
                                {/*begin::Badge*/}
                                <div className="timeline-badge">
                                  <i className="fa fa-genderless text-primary icon-xl" />
                                </div>
                                {/*end::Badge*/}
                                {/*begin::Text*/}
                                <div className="timeline-content font-weight-bolder text-dark font-size-lg pl-3">
                                  In: 08:00 - Out: 19:00
                                </div>
                                {/*end::Text*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row justify-content-center">
                  <div className="col-7 col-lg-7 col-sm-9 offset-3 px-7">
                    <button type="button" className="btn btn-primary mr-2">
                      Lưu thay đổi
                    </button>
                    <button type="button" className="btn btn-clean">
                      Quay lại
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* cai dat */}
          </div>
        </div>
      </div>
    </div>
  );
};
