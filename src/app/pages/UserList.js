import React from "react";
import { useSubheader } from "../../_metronic/layout";
import "./../../_metronic/_assets/sass/pages/my-page/my-page.scss";
import '../../_metronic/_assets/sass/pages/user-list/user-list.scss'

export const UserList = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle("Quản lý người dùng");

    return (
        <>
            <div className="card card-custom">
                <div className="card-header d-block border-0 pt-6 pb-0">
                    <div className="form-group row">
                        <div className="col-lg-4 mb-4">
                            <input type="text" className="form-control" name="searchText" placeholder="Tìm kiếm" />
                        </div>
                        <div className="col-lg-2 mb-4">
                            <select className="form-control" name="status" placeholder="Filter by Status">
                                <option value={0}>--Tất cả--</option>
                                <option value={1}>Chưa thanh toán</option>
                                <option value={2}>Đang sử dụng</option>
                                <option value={3}>Hết hạn</option>
                                <option value={4}>Đăng ký</option>
                            </select>
                            <small className="form-text text-muted mt-4"><b>Lọc</b> trạng thái</small>
                        </div>
                        <div className="col-lg-2 mb-4">
                            <select className="form-control" placeholder="Filter by Type" name="type">
                                <option value={0}>--Tất cả--</option>
                                <option value={1}>Free</option>
                                <option value={2}>Basic</option>
                                <option value={3}>Standard</option>
                                <option value={4}>Advanced</option>
                            </select>
                            <small className="form-text text-muted mt-4"><b>Lọc</b> gói</small>
                        </div>
                        <div className="col-lg-2 mb-4">
                            <select className="form-control" placeholder="Filter by Type" name="type">
                                <option value={0}>--Tất cả--</option>
                                <option value={1}>Tiếp cận</option>
                                <option value={2}>Dùng thử</option>
                                <option value={3}>Ký hợp đồng</option>
                            </select>
                            <small className="form-text text-muted mt-4"><b>Lọc</b> tiến trình</small>
                        </div>
                        <div className="col-lg-2 mb-4">
                            <select className="form-control" placeholder="Filter by Type" name="type">
                                <option value={0}>--Tất cả--</option>
                                <option value={1}>Do Van Phuoc</option>
                                <option value={2}>Do Van Nam</option>
                                <option value={3}>Do Van Phu</option>
                            </select>
                            <small className="form-text text-muted mt-4"><b>Lọc</b> nhân viên</small>
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0">
                    <div className="datatable datatable-default">
                        <div className="overflow-hidden">
                            <table className="table table-head-custom overflow-hidden table-responsive-custom custom">
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
                                <tbody>
                                    <tr>
                                        <td data-title="STT" className="d-lg-block d-md-none d-sm-none py-9">
                                            <span className="font-weight-bolder">1</span>
                                        </td> 
                                        <td data-title="Khách hàng">
                                            <div className="d-flex align-items-center py-3 py-3-sm">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">H</span>
                                                </div>
                                                <div className="ml-4 w-100">
                                                    <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Lyssa Ride</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                    <div className="d-lg-none">
                                                        <div className="d-sm-flex align-items-sm-center">
                                                            <span className="mr-3">0834.111.643</span>
                                                            <span class="svg-icon svg-icon-warning d-sm-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                        <path d="M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z" fill="#000000" opacity="0.3" />
                                                                        <rect fill="#000000" x="11" y="9" width="2" height="7" rx="1" />
                                                                        <rect fill="#000000" x="11" y="17" width="2" height="2" rx="1" />
                                                                    </g>
                                                                </svg>
                                                            </span> 
                                                        </div>
                                                        <div className="d-flex d-sm-flex align-items-sm-center mt-2">
                                                            <div>
                                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">F</span>
                                                                <span className="label btn btn-success label-lg font-weight-bold label-inline label-square">12/02/2022</span>
                                                            </div>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-block ml-2">Đang dùng thử</span>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-none">Đang dùng thử</span>
                                                            <div className="progress-wrap align-items-center d-flex ml-3" style={{ flexBasis: '30%' }}>
                                                                <div className="progress bg-warning" style={{ flexBasis: "30%" }}>
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="font-weight-bolder ml-2">30%</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span class="svg-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
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
                                            <div className="d-flex align-items-center">
                                                <span className="text">0834.111.643</span>
                                                <span class="svg-icon svg-icon-warning">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <path d="M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z" fill="#000000" opacity="0.3" />
                                                            <rect fill="#000000" x="11" y="9" width="2" height="7" rx="1" />
                                                            <rect fill="#000000" x="11" y="17" width="2" height="2" rx="1" />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-flex">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">F</span>
                                                <span className="label btn btn-primary label-lg font-weight-bold label-inline label-square">12/02/2022</span>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="label-lg font-weight-bold label-inline">Đang dùng thử</span>
                                            <div className="progress-wrap align-items-center d-flex">
                                                <div className="progress bg-warning" style={{ flexBasis: "50%" }}>
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="font-weight-bolder ml-2">50%</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span class="svg-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="ml-2">Hieu pc</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline d-sm-flex align-items-sm-center">
                                                <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size" data-toggle="dropdown">
                                                    <span class="svg-icon svg-icon-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                                <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"></path>
                                                                <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"></path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <span className="d-lg-none d-sm-block">[1]</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="STT" className="d-lg-block d-sm-none py-9">
                                            <span className="font-weight-bolder">2</span>
                                        </td>
                                        <td data-title="Khách hàng">
                                            <div className="d-flex align-items-center py-3 py-3-sm">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">H</span>
                                                </div>
                                                <div className="ml-4 w-100">
                                                    <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Lyssa Ride</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                    <div className="d-lg-none">
                                                        <span className="text">0834.111.643</span>
                                                        <div className="d-flex d-sm-flex align-items-sm-center mt-2">
                                                            <div>
                                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">F</span>
                                                                <span className={`label btn btn-success label-lg font-weight-bold label-inline label-square`}>12/02/2022</span>
                                                            </div>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-block ml-2">Đang dùng thử</span>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-none">Đang dùng thử</span>
                                                            <div className="progress-wrap align-items-center d-flex ml-3" style={{ flexBasis: "30%" }}>
                                                                <div className="progress bg-warning" style={{ flexBasis: "30%" }}>
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="font-weight-bolder ml-2">30%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="text">0834.111.643</span>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-flex">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">B</span>
                                                <span className="label btn btn-danger label-lg font-weight-bold label-inline label-square">12/02/2020</span>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="label-lg font-weight-bold label-inline">Đã ký hợp đồng</span>
                                            <div className="progress-wrap align-items-center d-flex">
                                                <div className="progress bg-primary" style={{ flexBasis: "70%" }}>
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="font-weight-bolder ml-2">70%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline d-sm-flex align-items-sm-center">
                                                <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size" data-toggle="dropdown">
                                                    <span class="svg-icon svg-icon-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                                <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"></path>
                                                                <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"></path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <span className="d-lg-none d-sm-block">[2]</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="STT" className="d-lg-block d-sm-none py-9">
                                            <span className="font-weight-bolder">3</span>
                                        </td>
                                        <td data-title="Khách hàng">
                                            <div className="d-flex align-items-center py-3 py-3-sm">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">H</span>
                                                </div>
                                                <div className="ml-4 w-100">
                                                    <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Lyssa Ride</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                    <div className="d-lg-none">
                                                        <span className="text">0834.111.643</span>
                                                        <div className="d-flex d-sm-flex align-items-sm-center mt-2">
                                                            <div>
                                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">F</span>
                                                                <span className={`label btn btn-success label-lg font-weight-bold label-inline label-square`}>12/02/2022</span>
                                                            </div>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-block ml-2">Đang dùng thử</span>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-none">Đang dùng thử</span>
                                                            <div className="progress-wrap align-items-center d-flex ml-3"  style={{ flexBasis: "30%" }}>
                                                                <div className="progress bg-warning" style={{ flexBasis: "30%" }}>
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="font-weight-bolder ml-2">30%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="text">0834.111.643</span>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-flex">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">S</span>
                                                <span className="label btn btn-primary label-lg font-weight-bold label-inline label-square">12/02/2022</span>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="label-lg font-weight-bold label-inline">Đang dùng thử</span>
                                            <div className="progress-wrap align-items-center d-flex">
                                                <div className="progress bg-warning" style={{ flexBasis: "50%" }}>
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="font-weight-bolder ml-2">50%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline d-sm-flex align-items-sm-center">
                                                <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size" data-toggle="dropdown">
                                                    <span class="svg-icon svg-icon-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                                <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"></path>
                                                                <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"></path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <span className="d-lg-none d-sm-block">[3]</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="STT" className="d-lg-block d-sm-none py-9">
                                            <span className="font-weight-bolder">4</span>
                                        </td>
                                        <td data-title="Khách hàng">
                                            <div className="d-flex align-items-center py-3 py-3-sm">
                                                <div className="symbol symbol-40 symbol-light-dark flex-shrink-0">
                                                    <span className="symbol-label font-size-h4 font-weight-bold">H</span>
                                                </div>
                                                <div className="ml-4 w-100">
                                                    <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">Lyssa Ride</div>
                                                    <a href="#" className="text-muted font-weight-bold text-hover-primary">lcarnall9f@alexa.com</a>
                                                    <div className="d-lg-none">
                                                        <span className="text">0834.111.643</span>
                                                        <div className="d-flex d-sm-flex align-items-sm-center mt-2">
                                                            <div>
                                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">F</span>
                                                                <span className={`label btn btn-success label-lg font-weight-bold label-inline label-square`}>12/02/2022</span>
                                                            </div>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-block ml-2">Đang dùng thử</span>
                                                            <span className="label-lg font-weight-bold label-inline d-sm-none">Đang dùng thử</span>
                                                            <div className="progress-wrap align-items-center d-flex ml-3" style={{ flexBasis: "30%" }}>
                                                                <div className="progress bg-warning" style={{ flexBasis: "30%" }}>
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <span className="font-weight-bolder ml-2">30%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="text">0834.111.643</span>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-flex">
                                                <span class="label label-lg font-weight-bold btn btn-info label-inline label-square">A</span>
                                                <span className="label btn btn-warning label-lg font-weight-bold label-inline label-square">12/02/2021</span>
                                            </div>
                                        </td>
                                        <td className="d-none d-lg-table-cell">
                                            <span className="label-lg font-weight-bold label-inline">Đang tiếp cận</span>
                                            <div className="progress-wrap align-items-center d-flex">
                                                <div className="progress bg-danger" style={{ flexBasis: "30%" }}>
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="font-weight-bolder ml-2">30%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dropdown dropdown-inline d-sm-flex align-items-sm-center">
                                                <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size" data-toggle="dropdown">
                                                    <span class="svg-icon svg-icon-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                                <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"></path>
                                                                <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"></path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <span className="d-lg-none d-sm-block">[4]</span>
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
