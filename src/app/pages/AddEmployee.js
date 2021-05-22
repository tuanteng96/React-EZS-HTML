import React from "react";
import "../../_metronic/_assets/sass/pages/AddEmployee/AddEmployee.scss";
import "../../_metronic/_assets/sass/pages/wizard/wizard-4.scss";
import SidebarSetting from '../pages/settings/SidebarSetting'

export const AddEmployee = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <SidebarSetting />
      </div>
      <div className="col-lg-9">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
