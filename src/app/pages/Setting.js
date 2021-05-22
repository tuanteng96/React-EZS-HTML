import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SidebarSetting from '../pages/settings/SidebarSetting'

export const Setting = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <SidebarSetting />
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="card card-custom">
          <div className="card-header card-header-tabs-line">
            <div className="card-toolbar">
              <ul className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-edit-contact">
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
                  <a className="nav-link active" data-toggle="tab" href="#">
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

                          <div className="separator separator-dashed"></div>

                          <div className="form-group row fv-plugins-icon-container mt-lg-5">
                            <label className="col-xl-3 col-lg-3 col-sm-3 pt-0 col-form-label">
                              Ngày công/Tháng
                            </label>
                            <div className="col-lg-9 col-xl-9 col-sm-9">
                              <div className="w-75 form-check d-flex justify-content-between align-items-center pl-lg-0">
                                <label class="radio">
                                  <input type="radio" />
                                  <span className="mr-lg-3"></span>Xác định theo số ngày công
                                </label>
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Code/Warning-1-circle.svg")}
                                    />
                                </span>
                              </div>
                              <div className="w-75 mt-lg-3 form-check d-flex justify-content-between align-items-center pl-lg-0">
                                <label class="radio">
                                  <input type="radio" checked="checked" />
                                  <span className="mr-lg-3"></span>Xác định số ngày nghỉ
                                </label>
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Code/Warning-1-circle.svg")}
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
                              Giá trị giữ lương
                            </label>
                            <div className="col-lg-6 col-xl-6 col-sm-9">
                              <div class="input-icon input-icon-right">
                                <input
                                  className="form-control form-control-solid"
                                  type="text"
                                  defaultValue="40"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-sm-9">
                                <div className="pay d-flex justify-content-between">
                                    <label class="radio">
                                        <input type="radio" checked="checked" />
                                        <span className="mr-lg-3"></span>%
                                    </label>
                                    <label class="radio">
                                        <input type="radio" />
                                        <span className="mr-lg-3"></span>VNĐ
                                    </label>
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
                          <div className="row">
                              <div className="col-lg-8 col-xl-8 col-sm-9">
                                Tổng giá trị lương tới thời điểm hiện tại: <span className="font-weight-boldest">10.000.000VNĐ</span>
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
        </div>
      </div>
    </div>
  );
};
