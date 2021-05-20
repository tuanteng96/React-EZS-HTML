import React, { useLayoutEffect } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import "../../_metronic/_assets/sass/pages/EditAccount/EditAccount.scss";

export const EditContact = () => {

  return (
    <div className="row">
      <div className="col-lg-3">
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="card card-custom h-100">
          <div className="card-header card-header-tabs-line">
            <div className="card-toolbar">
              <ul className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-edit-contact">
                <li className="nav-item mr-3">
                  <a className="nav-link active" data-toggle="tab" href="#">
                    <span className="nav-icon">
                      <span className="svg-icon svg-icon-primary">
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
            <div className="tab-content pt-5">
              <div className="tab-pane px-7 active">
                <form className="form">
                  <div className="row">
                    <div className="col-lg-9 col-xl-6 offset-3 offset-sm-2 offset-xl-3">
                      <h3 className="font-size-h6 mb-10 font-weight-bolder">
                        Thông tin nhân viên:
                      </h3>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right">
                      Ảnh
                    </label>
                    <div className="col-lg-9 col-xl-9 col-9 col-sm-10">
                      <div
                        className="image-input image-input-outline"
                        style={{
                          backgroundImage:
                            "url(https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/blank.png)",
                        }}
                      >
                        <div
                          className="image-input-wrapper"
                          style={{
                            backgroundImage:
                              "url(/metronic/theme/html/demo1/dist/assets/media/users/100_3.jpg)",
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
                          <input type="hidden" name="profile_avatar_remove" />
                        </label>
                        <span
                          className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                          data-action="cancel"
                          data-toggle="tooltip"
                          title
                          data-original-title="Cancel avatar"
                        >
                          <i className="ki ki-bold-close icon-xs text-muted" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row align-items-center">
                    <label
                      htmlFor="username"
                      className="col-xl-3 col-lg-3 col-12 col-sm-2 col-form-label text-left text-lg-right"
                    >
                      Họ và tên
                    </label>
                    <div className="col-lg-9 col-xl-6 col-12 col-sm-10">
                      <input
                        id="username"
                        className="form-control form-control-solid"
                        type="text"
                        defaultValue="Trung Hiếu"
                      />
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <label className="col-form-label col-lg-3 col-12 col-sm-2 text-left text-lg-right">
                      Cấp bậc
                    </label>
                    <div className="col-lg-9 col-xl-6 col-12 col-sm-10">
                      <select className="form-control form-control-solid selectpicker">
                        <option>Chuyên viên</option>
                        <option>Thiết kế đồ họa</option>
                        <option>Lập trình game</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row align-items-center">
                    <label className="col-xl-3 col-lg-3 col-4 col-sm-2 col-form-label text-left text-lg-right">
                      Trạng thái
                    </label>
                    <div className="col-lg-9 col-xl-6 col-8 col-sm-10">
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

                  <div className="form-group row align-items-center">
                    <label
                      htmlFor="phone-number"
                      className="col-xl-3 col-lg-3 col-sm-2 col-12 col-form-label text-left text-lg-right"
                    >
                      Số điện thoại
                    </label>
                    <div className="col-lg-9 col-xl-6 col-sm-10 col-12">
                      <div className="input-group input-group-solid">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-phone-alt font-weight-normal" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          name="phone"
                          defaultValue="0981.883.338"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <label
                      htmlFor="email"
                      className="col-xl-3 col-lg-3 col-sm-2 col-12 col-form-label text-left text-lg-right"
                    >
                      Email
                    </label>
                    <div className="col-lg-9 col-xl-6 col-sm-10 col-12">
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
                </form>
              </div>
            </div>
          </div>
          <div className="card-footer ml-5 ml-lg-0">
            <div className="row">
              <div className="col-9 offset-md-2 offset-sm-2 offset-lg-3 px-7">
                <button type="button" className="btn btn-primary">
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
