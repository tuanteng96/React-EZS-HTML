import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import "../../_metronic/_assets/sass/pages/Manager/Manager.scss";

export const ManagerEmployee = () => {
  return (
    <div className="row">
      <div className="col-lg-3 mb-4">
        <div className="card">
          <div className="card-body">
            <a
              href="#"
              className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block active"
            >
              Danh sách nhân viên
            </a>
            <a
              href="#"
              className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block"
            >
              Cấp bậc nhân viên
            </a>
            <a
              href="#"
              className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block"
            >
              Lương Cơ bản & Phụ cấp
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="card">
          <div className="card-header border-0 pt-6 pb-6">
            <div className="row justify-content-evenly align-items-center">
              <div className="col-lg-7 col-sm-6">
                <div className="card-title mb-0 d-flex align-items-center">
                  <h3 className="card-label mb-3 mb-sm-0 mb-lg-0">
                    <span className="text-dark font-weight-boldest list-employee">
                      Danh sách nhân viên
                      <span class="label label-sm font-weight-bolder label-rounded label-danger total">
                        50
                      </span>
                    </span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 d-flex flex-column flex-sm-row justify-content-end align-items-sm-center">
                <form className="d-flex sm-mr-0 lg-mr-5 mb-3 mb-sm-0 mb-lg-0 mb-lg-0">
                  <div className="input-group input-group-sm input-group-solid mr-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm"
                      style={{ height: '33.27px' }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Design/ZoomMinus.svg"
                          )}
                        />
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-light-primary btn-sm ml-2 d-inline-block d-sm-none d-lg-none">
                    <i className="fal fa-filter p-0"></i>
                  </button>
                </form>
                <div className="card-toolbar d-flex align-items-start align-items-sm-center">
                  <button className="btn btn-primary btn-sm font-weight-bolder">
                    <i class="font-size-sm flaticon-user-add"></i>
                    Thêm mới
                  </button>
                  <button className="btn btn-light-primary btn-sm ml-2 d-none d-sm-inline-block d-lg-inline-block">
                    <i className="fal fa-filter p-0"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="datatable datatable-default">
              <div className="overflow-hidden">
                <table className="table table-head-custom overflow-hidden table-responsive-custom custom table-employee">
                  <thead>
                    <tr>
                      <th>
                        <span>Nhân viên</span>
                      </th>
                      <th>
                        <span>Cấp bậc</span>
                      </th>
                      <th>
                        <span>Ngày tạo</span>
                      </th>
                      <th>
                        <span>Cơ sở</span>
                      </th>
                      <th>
                        <span>Trạng thái</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-title="Khách hàng" className="px-6">
                        <div className="row align-items-center py-0 py-3-sm">
                          <div className="col-lg-12 col-sm-7">
                            <div className="d-flex align-items-center py-3 py-3-sm">
                              <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                <span className="symbol-label font-size-h4 font-weight-bold">
                                  H
                                </span>
                              </div>
                              <div className="ml-4 w-100 d-flex flex-column">
                                <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                                  Đỗ Văn Nam
                                </div>
                                <a
                                  href="#"
                                  className="text-muted font-weight-bold text-hover-primary"
                                >
                                  <span className="svg-icon">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/icons/Communication/Adress-book1.svg"
                                      )}
                                    />
                                  </span>
                                  <span> 0834.111.643</span>
                                </a>
                                <span className="label label-lg label-light-primary label-inline mr-3 d-lg-none d-sm-none d-inline-flex w-50 mt-3">
                                  Hoạt động
                                </span>
                                <div className="d-lg-none">
                                  <div className="d-sm-flex align-items-sm-center">
                                    <span className="font-weight-boldest text-color-blackfont-size-lg d-none d-lg-block">
                                      25/04/2016
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-0 col-sm-5 d-sm-flex justify-content-sm-between d-lg-none pl-5">
                            <span className="label label-lg label-light-primary label-inline mr-3 d-lg-none d-none d-sm-inline-flex">
                              Hoạt động
                            </span>
                            <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex">
                              <span className="svg-icon svg-icon-md">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/icons/Communication/Write.svg"
                                  )}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-color-blackfont-size-lg">
                          Thử việc
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-color-blackfont-size-lg">
                          03/02/2017
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-color-blackfont-size-lg">
                          Cơ sở Hà Nội
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg label-light-primary label-inline">
                          Hoạt động
                        </span>
                      </td>
                      <td className="d-lg-table-cell d-none d-lg-block">
                        <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size">
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            />
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Khách hàng" className="px-6">
                        <div className="row align-items-center py-0 py-3-sm">
                          <div className="col-lg-12 col-sm-7">
                            <div className="d-flex align-items-center py-3 py-3-sm">
                              <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                <span className="symbol symbol-40 symbol-sm flex-shrink-0">
                                  <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/100_11.jpg" />
                                </span>
                              </div>
                              <div className="ml-4 w-100 d-flex flex-column">
                                <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                                  Vũ Hoàng Long
                                </div>
                                <a
                                  href="#"
                                  className="text-muted font-weight-bold text-hover-primary"
                                >
                                  <span className="svg-icon">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/icons/Communication/Adress-book1.svg"
                                      )}
                                    />
                                  </span>
                                  <span> 0834.111.643</span>
                                </a>
                                <span className="label label-lg label-light-primary label-inline mr-3 d-lg-none d-sm-none d-inline-flex mt-3 w-50">
                                  Hoạt động
                                </span>
                                <div className="d-lg-none">
                                  <span className="text-color-black text-color-blackfont-size-lg d-none d-lg-block">
                                    03/03/2017
                                  </span>
                                  <div className="d-flex d-sm-flex align-items-sm-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-0 col-sm-5 d-sm-flex justify-content-sm-between d-lg-none pl-5">
                            <span className="label label-lg label-light-primary label-inline mr-3 d-lg-none d-none d-sm-inline-flex">
                              Hoạt động
                            </span>
                            <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex">
                              <span className="svg-icon svg-icon-md">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/icons/Communication/Write.svg"
                                  )}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-color-blackfont-size-lg">
                          Chuyên viên
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell d-sm-none">
                        <span className="text-color-black text-color-blackfont-size-lg">
                          03/03/2017
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-color-blackfont-size-lg">
                          Cơ sở HCM
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg label-light-primary label-inline">
                          Hoạt động
                        </span>
                      </td>
                      <td className="d-lg-table-cell d-none d-lg-block">
                        <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size">
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            />
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Khách hàng" className="px-6">
                        <div className="row align-items-center py-3-sm">
                          <div className="col-lg-12 col-sm-7">
                            <div className="d-flex align-items-center py-3 py-3-sm">
                              <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                <span className="symbol-label font-size-h4 font-weight-bold">
                                  T
                                </span>
                              </div>
                              <div className="ml-4 w-100 d-flex flex-column">
                                <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                                  Đinh Tiến Đạt
                                </div>
                                <a
                                  href="#"
                                  className="text-muted text-hover-primary"
                                >
                                  <span className="svg-icon">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/icons/Communication/Adress-book1.svg"
                                      )}
                                    />
                                  </span>
                                  <span> 0834.111.643</span>
                                </a>
                                <span className="label label-lg label-light-danger label-inline mr-3 d-lg-none d-sm-none d-inline-flex mt-3 w-50">
                                  Nghỉ
                                </span>
                                <div className="d-lg-none">
                                  <span className="text-color-black text-color-blackfont-size-lg d-none d-lg-block">
                                    03/03/2017
                                  </span>
                                  <div className="d-flex d-sm-flex align-items-sm-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-0 col-sm-5 d-lg-none d-sm-flex justify-content-sm-between pl-5">
                            <span className="label label-lg label-light-danger label-inline mr-3 d-none d-sm-inline-flex d-lg-none">
                              Nghỉ
                            </span>
                            <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex">
                              <span className="svg-icon svg-icon-md">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/icons/Communication/Write.svg"
                                  )}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-color-blackfont-size-lg">
                          Chuyên gia
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-color-black text-color-blackfont-size-lg">
                          11/12/2016
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-color-blackfont-size-lg">
                          Cơ sở Đà Nẵng
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg label-light-danger label-inline">
                          Nghỉ
                        </span>
                      </td>
                      <td className="d-lg-table-cell d-none d-lg-block">
                        <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size">
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            />
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Khách hàng" className="px-6">
                        <div className="row align-items-center py-3-sm">
                          <div className="col-lg-12 col-sm-7">
                            <div className="d-flex align-items-center py-3 py-3-sm">
                              <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                <span className="symbol-label font-size-h4 font-weight-bold">
                                  T
                                </span>
                              </div>
                              <div className="ml-4 w-100 d-flex flex-column">
                                <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                                  Đinh Tiến Đạt
                                </div>
                                <a
                                  href="#"
                                  className="text-muted text-hover-primary"
                                >
                                  <span className="svg-icon">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/icons/Communication/Adress-book1.svg"
                                      )}
                                    />
                                  </span>
                                  <span> 0834.111.643</span>
                                </a>
                                <span className="label label-lg label-light-danger label-inline mr-3 d-lg-none d-sm-none d-inline-flex mt-3 w-50">
                                  Nghỉ
                                </span>
                                <div className="d-lg-none">
                                  <span className="text-color-black text-color-blackfont-size-lg d-none d-lg-block">
                                    03/03/2017
                                  </span>
                                  <div className="d-flex d-sm-flex align-items-sm-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-0 col-sm-5 d-lg-none d-sm-flex justify-content-sm-between pl-5">
                            <span className="label label-lg label-light-danger label-inline mr-3 d-none d-sm-inline-flex d-lg-none">
                              Nghỉ
                            </span>
                            <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex">
                              <span className="svg-icon svg-icon-md">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/icons/Communication/Write.svg"
                                  )}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-color-blackfont-size-lg">
                          Chuyên viên
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell d-sm-none">
                        <span className="text-color-black text-color-blackfont-size-lg">
                          05/06/2018
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-color-blackfont-size-lg">
                          Cơ sở Yên Bái
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg font-weight-bold  label-light-danger label-inline">
                          Nghỉ
                        </span>
                      </td>
                      <td className="d-lg-table-cell d-none d-lg-block">
                        <a className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size">
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            />
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
