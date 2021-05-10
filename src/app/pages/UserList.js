import React from "react";
import { useSubheader } from "../../_metronic/layout";
import "./../../_metronic/_assets/sass/pages/my-page/my-page.scss";
import '../../_metronic/_assets/sass/pages/user-list/user-list.scss'
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SVG from "react-inlinesvg";

export const UserList = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle("My Custom title");

    return (
        <>
            <div className="card card-custom">
                <div className="card-header flex-wrap border-0 pt-6 pb-0">
                    <div className="card-title">
                        <h3 className="card-label">
                            Quản lý người dùng
                        <span className="d-block text-muted pt-2 font-size-sm">Quản lý người dùng dễ dàng</span>
                        </h3>
                    </div>
                    <div className="card-toolbar">
                        <div className="dropdown dropdown-inline mr-2">
                            <button type="button" className="btn btn-light-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="svg-icon svg-icon-md">
                                    {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Design/PenAndRuller.svg*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3" />
                                            <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000" />
                                        </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                </span>Tìm kiếm</button>
                            {/*begin::Dropdown Menu*/}
                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                {/*begin::Navigation*/}
                                <ul className="navi flex-column navi-hover py-2">
                                    <li className="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">Choose an option:</li>
                                    <li className="navi-item">
                                        <a href="#" to="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-print" />
                                            </span>
                                            <span className="navi-text">Print</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" to="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-copy" />
                                            </span>
                                            <span className="navi-text">Copy</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" to="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-file-excel-o" />
                                            </span>
                                            <span className="navi-text">Excel</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" to="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-file-text-o" />
                                            </span>
                                            <span className="navi-text">CSV</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" to="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-file-pdf-o" />
                                            </span>
                                            <span className="navi-text">PDF</span>
                                        </a>
                                    </li>
                                </ul>
                                {/*end::Navigation*/}
                            </div>
                            {/*end::Dropdown Menu*/}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="datatable datatable-default">
                        <div className="react-bootstrap-table table-responsive">
                            <table className="table table table-head-custom table-vertical-center overflow-hidden">
                                <thead>
                                    <tr>
                                        <th>
                                            <span>#</span>
                                        </th>
                                        <th>
                                            <span className="customer">Khách hàng</span>
                                        </th>
                                        <th>
                                            <span className="customer">Điện thoại</span>
                                        </th>
                                        <th>
                                            <span className="customer">Trạng thái</span>
                                        </th>
                                        <th>
                                            <span className="customer">Tiến trình</span>
                                        </th>
                                        <th>
                                            <span className="customer">Xử lý</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="datatable-body">
                                    <tr>
                                        <td>
                                            <span className="font-weight-bolder">1</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">H</span>
                                                </div>
                                                <div className="ml-4"><div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Lyssa Ride</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" className="phonenumber">
                                                <span className="text">0834.111.643</span>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="package">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline">F</span>
                                                <span className="label label-lg font-weight-bold btn btn-primary label-inline">12/02/2021</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="label label-lg font-weight-bold btn btn-warning label-inline">Đang chăm sóc</span>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline">
                                                <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">
                                                    <span className="svg-icon svg-icon-md"><SVG
                                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                                                    />
                                                    </span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bolder">2</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">L</span>
                                                </div>
                                                <div className="ml-4"><div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Will Trussell</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" className="phonenumber">
                                                <span className="text">0834.111.643</span>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="package">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline">B</span>
                                                <span className="label label-lg font-weight-bold btn btn-warning label-inline">12/02/2021</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="label label-lg font-weight-bold  btn btn-danger label-inline">Đang chăm sóc</span>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline">
                                                <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">
                                                    <span className="svg-icon svg-icon-md"><SVG
                                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                                                    />
                                                    </span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bolder">3</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">G</span>
                                                </div>
                                                <div className="ml-4"><div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Lanae Carnall</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" className="phonenumber">
                                                <span className="text">0834.111.643</span>
                                                <span class="svg-icon svg-icon-primary svg-icon-2x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                                            <rect fill="#000000" x="11" y="7" width="2" height="8" rx="1"/>
                                                            <rect fill="#000000" x="11" y="16" width="2" height="2" rx="1"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="package">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline">S</span>
                                                <span className="label label-lg font-weight-bold btn btn-success label-inline">12/02/2021</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="label label-lg font-weight-bold btn btn-success label-inline">Đang chăm sóc</span>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline">
                                                <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">
                                                    <span className="svg-icon svg-icon-md"><SVG
                                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                                                    />
                                                    </span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bolder">4</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <img src="https://preview.keenthemes.com/metronic/demo1/custom/apps/user/assets/media/users/100_13.jpg" alt="photo" />
                                                </div>
                                                <div className="ml-4"><div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Benjie Foyle</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" className="phonenumber">
                                                <span className="text">0834.111.643</span>
                                                <span class="svg-icon svg-icon-primary svg-icon-2x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                                            <rect fill="#000000" x="11" y="7" width="2" height="8" rx="1"/>
                                                            <rect fill="#000000" x="11" y="16" width="2" height="2" rx="1"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="package">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline">A</span>
                                                <span className="label label-lg font-weight-bold btn btn-success label-inline">12/02/2021</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="label label-lg font-weight-bold  btn btn-primary label-inline">Đang chăm sóc</span>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline">
                                                <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">
                                                    <span className="svg-icon svg-icon-md"><SVG
                                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                                                    />
                                                    </span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bolder">5</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <img src="https://preview.keenthemes.com/metronic/demo1/custom/apps/user/assets/media/users/100_14.jpg" alt="photo" />
                                                </div>
                                                <div className="ml-4"><div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Nelson Hamman</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" className="phonenumber">
                                                <span className="text">0834.111.643</span>
                                                <span class="svg-icon svg-icon-primary svg-icon-2x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                                            <rect fill="#000000" x="11" y="7" width="2" height="8" rx="1"/>
                                                            <rect fill="#000000" x="11" y="16" width="2" height="2" rx="1"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="package">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline">B</span>
                                                <span className="label label-lg font-weight-bold btn btn-success label-inline">12/02/2021</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="label label-lg font-weight-bold  btn btn-danger label-inline">Đang chăm sóc</span>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline">
                                                <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">
                                                    <span className="svg-icon svg-icon-md"><SVG
                                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                                                    />
                                                    </span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
