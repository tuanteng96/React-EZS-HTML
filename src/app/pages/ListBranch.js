import React from "react";
import { useSubheader } from "../../_metronic/layout";
import "./../../_metronic/_assets/sass/pages/my-page/my-page.scss";
import profile from './../../_metronic/_assets/img/profit.png';
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import '../../_metronic/_assets/sass/pages/ListBranch/ListBranch.scss'

export const ListBranch = () => {
    const suhbeader = useSubheader()
    suhbeader.setTitle("Danh sách chi nhánh")
    return (
        <div className="row">
            <div className="col-xl-3 col-lg-5 mb-sm-4 mb-lg-0">
                <div className="card card-custom h-100">
                    <div className="card-body pt-4">
                        <div className="d-flex justify-content-end">
                            <div className="dropdown dropdown-inline">
                                <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ki ki-bold-more-hor" />
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="symbol symbol-60 symbol-xxl-75 mr-5 align-self-start align-self-xxl-center">
                                <div className="symbol-label" style={{ backgroundImage: 'url("https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_13.jpg")' }} />
                                <i className="symbol-badge bg-success" />
                            </div>
                            <div>
                                <a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">Cser Beauty & Spa</a>
                                <div className="text-muted">0981.883.338</div>
                            </div>
                        </div>
                        <div className="pt-8 pb-6">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Email:</span>
                                <a href="#" className="text-muted text-hover-primary">lienhe@ezs.vn</a>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Số điện thoại</span>
                                <span className="text-muted">0981.883.338</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Địa chỉ</span>
                                <span className="text-muted">180 Hai Bà Trưng Hà Nội</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Link truy cập</span>
                                <span className="text-muted">cser.ezs.vn</span>
                            </div>
                        </div>
                        <a href="#" className="btn btn-light-success font-weight-bold py-3 px-6 mb-2 text-center btn-block">View more</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 d-none d-xl-block">
                <div className="card card-custom bg-radial-gradient-primary card-stretch">
                    <div className="card-header border-0 py-5">
                        <h3 className="card-title font-weight-bolder text-white">Sales Progress</h3>
                        <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                                <a href="#" className="btn btn-text-white btn-hover-white btn-sm btn-icon border-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ki ki-bold-more-hor" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                    <ul className="navi navi-hover">
                                        <li className="navi-header font-weight-bold py-4">
                                            <span className="font-size-lg">Choose Label:</span>
                                            <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title data-original-title="Click to learn more..." />
                                        </li>
                                        <li className="navi-separator mb-3 opacity-70" />
                                        <li className="navi-item">
                                            <a href="#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-success">Customer</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-danger">Partner</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-warning">Suplier</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-primary">Member</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#" className="navi-link">
                                                <span className="navi-text">
                                                    <span className="label label-xl label-inline label-light-dark">Staff</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-separator mt-3 opacity-70" />
                                        <li className="navi-footer py-4">
                                            <a className="btn btn-clean font-weight-bold btn-sm" href="#">
                                                <i className="ki ki-plus icon-sm">Add new</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body d-flex flex-column p-0" style={{ position: 'relative' }}>
                        <img src={profile} />
                        <div className="card-spacer bg-white card-rounded flex-grow-1">
                            <div className="row m-0">
                                <div className="col px-8 py-6 mr-8">
                                    <div className="font-size-sm text-muted font-weight-bold">Average Sale</div>
                                    <div className="font-size-h4 font-weight-bolder">$650</div>
                                </div>
                            </div>
                        </div>
                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '289px', height: '378px' }} /></div><div className="contract-trigger" /></div></div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-7 mt-lg-0">
                <div className="card card-custom card-stretch">
                    <div className="card-header border-0">
                        <h3 className="card-title font-weight-bolder text-dark">Danh sách chi nhánh</h3>
                        <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                                <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ki ki-bold-more-ver" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <div className="mb-3 border p-4">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-sm-7 col-8">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4 d-sm-none d-lg-block">
                                            <input type="checkbox" defaultValue={1} />
                                            <span />
                                        </label>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1">Cser Hà Nội</a>
                                            <span className="text-muted font-weight-bold address">Acm building 22/42 Vũ Ngọc Phan, Hà Nội</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-none d-sm-inline-flex d-lg-inline-flex ">Hoạt động</span>
                                        <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex" title="Edit details">
                                            <span className="svg-icon svg-icon-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 border p-4">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-sm-7 col-8">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4 d-sm-none d-lg-block">
                                            <input type="checkbox" defaultValue={1} />
                                            <span />
                                        </label>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1">Cser Hà Nội</a>
                                            <span className="text-muted font-weight-bold address">Acm building 22/42 Vũ Ngọc Phan, Hà Nội</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex justify-content-between pl-10">
                                        <span class="label label-lg label-light-warning label-inline font-weight-bold py-4 d-none d-sm-inline-flex d-lg-inline-flex">Đóng</span>
                                        <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex" title="Edit details">
                                            <span className="svg-icon svg-icon-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 border p-4">
                            <div className="row align-items-center opacity-40">
                                <div className="col-lg-8 col-sm-7 col-8">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4 d-sm-none d-lg-block">
                                            <input type="checkbox" defaultValue={1} />
                                            <span />
                                        </label>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1">BrandName + Cơ sở 3</a>
                                            <span className="text-muted font-weight-bold address">Đang cập nhật địa chỉ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-lg-inline-flex d-none d-sm-inline-flex">Hoạt động</span>
                                        <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex" title="Edit details">
                                            <span className="svg-icon svg-icon-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 border p-4">
                            <div className="row align-items-center opacity-40">
                                <div className="col-lg-8 col-sm-7 col-8">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4 d-sm-none d-lg-block">
                                            <input type="checkbox" defaultValue={1} />
                                            <span />
                                        </label>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1">BrandName + Cơ sở 4</a>
                                            <span className="text-muted font-weight-bold address">Đang cập nhật địa chỉ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-lg-inline-flex d-none d-sm-inline-flex">Hoạt động</span>
                                        <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex" title="Edit details">
                                            <span className="svg-icon svg-icon-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 border p-4">
                            <div className="row align-items-center opacity-40">
                                <div className="col-lg-8 col-sm-7 col-8">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4 d-sm-none d-lg-block">
                                            <input type="checkbox" defaultValue={1} />
                                            <span />
                                        </label>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1">BrandName + Cơ sở 5</a>
                                            <span className="text-muted font-weight-bold address">Đang cập nhật địa chỉ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-lg-inline-flex d-none d-sm-inline-flex">Hoạt động</span>
                                        <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex" title="Edit details">
                                            <span className="svg-icon svg-icon-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) " />
                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}