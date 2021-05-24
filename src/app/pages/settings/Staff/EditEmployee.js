import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import "../../../../_metronic/_assets/sass/pages/EditAccount/EditAccount.scss";

export const EditEmployee = () => {
  return (
    <div className="card card-custom">
      <div className="card-header card-header-tabs-line">
        <div className="card-toolbar">
          <ul className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-edit-contact">
            <li className="nav-item mr-3">
              <a className="nav-link" data-toggle="tab" href="#">
                <span className="nav-icon">
                  <span className="svg-icon">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
                    />
                  </span>
                </span>
                <span className="nav-text">Thông tin</span>
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" data-toggle="tab" href="#">
                <span className="nav-icon">
                  <span className="svg-icon">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
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
                        <div className="col-lg-9 col-xl-6 offset-3 offset-md-3 offset-sm-2 offset-lg-3 mt-7">
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
  );
};
