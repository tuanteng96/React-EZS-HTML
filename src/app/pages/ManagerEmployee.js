import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export const ManagerEmployee = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
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
          <div className="card-body pt-0">
            <div className="datatable datatable-default">
              <div className="overflow-hidden">
                <table className="table table-head-custom overflow-hidden table-responsive-custom custom">
                  <thead>
                    <tr>
                      <th>
                        <span className="text-primary">Nhân viên</span>
                      </th>
                      <th>
                        <span className="customer">Ngày tạo</span>
                      </th>
                      <th>
                        <span className="customer">Cơ sở</span>
                      </th>
                      <th>
                        <span className="customer">Trạng thái</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-title="Khách hàng">
                        <div className="d-flex align-items-center py-3 py-3-sm">
                          <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                            <span className="symbol-label font-size-h4 font-weight-bold">
                              H
                            </span>
                          </div>
                          <div className="ml-4 w-100">
                            <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                              Lyssa Ride
                            </div>
                            <a
                              href="#"
                              className="text-muted font-weight-bold text-hover-primary"
                            >
                              SĐT: 0834.111.643
                            </a>
                            <div className="d-lg-none">
                              <div className="d-sm-flex align-items-sm-center">
                                <span className="text-primary font-weight-boldest">
                                  25/04/2016
                                </span>
                                <span class="svg-icon svg-icon-warning d-sm-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      />
                                      <path
                                        d="M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                      <rect
                                        fill="#000000"
                                        x="11"
                                        y="9"
                                        width="2"
                                        height="7"
                                        rx="1"
                                      />
                                      <rect
                                        fill="#000000"
                                        x="11"
                                        y="17"
                                        width="2"
                                        height="2"
                                        rx="1"
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <div className="d-flex d-sm-flex align-items-sm-center mt-2">
                                <div className="d-flex align-items-center">
                                  <span class="svg-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path
                                          d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                          fill="#000000"
                                          fill-rule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                          fill="#000000"
                                          fill-rule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="ml-2">Hieu pc</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-primary font-weight-boldest">
                          03/03/2017
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-dark font-weight-boldest font-size-lg">
                          Cơ sở Hà Nội
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg font-weight-bold  label-light-info label-inline">
                          Hoạt động
                        </span>
                      </td>
                      <td>
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Write.svg"
                          )}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Khách hàng">
                        <div className="d-flex align-items-center py-3 py-3-sm">
                          <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                            <span className="symbol-label font-size-h4 font-weight-bold">
                              H
                            </span>
                          </div>
                          <div className="ml-4 w-100">
                            <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                              Lyssa Ride
                            </div>
                            <a
                              href="#"
                              className="text-muted font-weight-bold text-hover-primary"
                            >
                              SĐT: 0834.111.643
                            </a>
                            <div className="d-lg-none">
                              <span className="text-primary font-weight-boldest">
                                03/03/2017
                              </span>
                              <div className="d-flex d-sm-flex align-items-sm-center mt-2"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-primary font-weight-boldest">
                          03/03/2017
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-dark font-weight-boldest font-size-lg">
                          Cơ sở Hồ Chí Minh
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg font-weight-bold  label-light-info label-inline">
                          Hoạt động
                        </span>
                      </td>
                      <td>
                            <SVG
                                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                            />
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Khách hàng">
                        <div className="d-flex align-items-center py-3 py-3-sm">
                          <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                            <span className="symbol-label font-size-h4 font-weight-bold">
                              H
                            </span>
                          </div>
                          <div className="ml-4 w-100">
                            <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                              Lyssa Ride
                            </div>
                            <a
                              href="#"
                              className="text-muted font-weight-bold text-hover-primary"
                            >
                              SĐT: 0834.111.643
                            </a>
                            <div className="d-lg-none">
                              <span className="text-primary font-weight-boldest">
                                03/03/2017
                              </span>
                              <div className="d-flex d-sm-flex align-items-sm-center mt-2"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-primary font-weight-boldest">
                          03/03/2017
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-dark font-weight-boldest font-size-lg">
                          Cơ sở Đà Nẵng
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg font-weight-bold  label-light-danger label-inline">
                          Nghỉ
                        </span>
                      </td>
                      <td>
                            <SVG
                                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                            />
                      </td>
                    </tr>
                    <tr>
                      <td data-title="Khách hàng">
                        <div className="d-flex align-items-center py-3 py-3-sm">
                          <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                            <span className="symbol-label font-size-h4 font-weight-bold">
                              H
                            </span>
                          </div>
                          <div className="ml-4 w-100">
                            <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                              Lyssa Ride
                            </div>
                            <a
                              href="#"
                              className="text-muted font-weight-bold text-hover-primary"
                            >
                              SĐT: 0834.111.643
                            </a>
                            <div className="d-lg-none">
                              <span className="text-primary font-weight-boldest">
                                03/03/2017
                              </span>
                              <div className="d-flex d-sm-flex align-items-sm-center mt-2"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="text-primary font-weight-boldest">
                          03/03/2017
                        </span>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <div className="text-dark font-weight-boldest font-size-lg">
                          Cơ sở Yên Bái
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell">
                        <span className="label label-lg font-weight-bold  label-light-danger label-inline">
                          Nghỉ
                        </span>
                      </td>
                      <td>
                            <SVG
                                className="svg-icon svg-icon-primary"
                                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                            />
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
