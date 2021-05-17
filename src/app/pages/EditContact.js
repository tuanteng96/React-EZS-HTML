import React from 'react';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export const EditContact = () => {
    return (
        <div className="row">
            <div className="col-lg-3">
                <ul className="nav flex-column bg-white">
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link active activeCustom" id="home-tab-5" data-toggle="tab" href="#home-5">
                            <span className="nav-icon">
                                <span className="svg-icon svg-icon-primary">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Thông tin cơ sở</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="profile-tab-5" data-toggle="tab" href="#profile-5" aria-controls="profile">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Danh sách nhân viên</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <i className="flaticon2-rocket-1" />
                            </span>
                            <span className="nav-text">Cấp bậc nhân viên</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Shield-user.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Lương nhân viên</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Mail-opened.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Sản phẩm</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-top-panel-6.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Cấu hình chuyển đổi</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Files/File.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Dịch vụ</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Files/Selected-file.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Phụ phí</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <i className="flaticon2-rocket-1" />
                            </span>
                            <span className="nav-text">Thẻ tiền</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Cấu hình hóa đơn</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <i className="flaticon2-rocket-1" />
                            </span>
                            <span className="nav-text">Kênh kết nối</span>
                        </a>
                    </li>
                    <li className="nav-item px-2 py-3">
                        <a className="nav-link activeCustom" id="contact-tab-5" data-toggle="tab" href="#contact-5" aria-controls="contact">
                            <span className="nav-icon">
                                <span className="svg-icon">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Communication/Shield-user.svg")}
                                    />
                                </span>
                            </span>
                            <span className="nav-text">Cài đặt khác</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="card card-custom h-100">
                    <div className="card-header card-header-tabs-line">
                        <div className="card-toolbar">
                            <ul className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x">
                                <li className="nav-item mr-3">
                                    <a className="nav-link active" data-toggle="tab" href="#">
                                        <span className="nav-icon">
                                            <span className="svg-icon svg-icon-primary">
                                                <SVG
                                                    src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
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
                                                    src={toAbsoluteUrl("/media/svg/icons/Communication/Shield-user.svg")}
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
                                                    src={toAbsoluteUrl("/media/svg/icons/Communication/Mail-opened.svg")}
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
                                        <div className="col-lg-9 col-xl-6 offset-xl-3">
                                            <h3 className="font-size-h6 mb-10 font-weight-bolder">Thông tin nhân viên:</h3>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right">Ảnh</label>
                                        <div className="col-lg-9 col-xl-9 col-9 col-sm-10">
                                            <div
                                                className="image-input image-input-outline"
                                                style={{ backgroundImage: 'url(https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/blank.png)' }}>
                                                <div className="image-input-wrapper" style={{ backgroundImage: 'url(/metronic/theme/html/demo1/dist/assets/media/users/100_3.jpg)' }}
                                                />
                                                <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                    data-action="change"
                                                    data-toggle="tooltip"
                                                    title data-original-title="Change avatar"
                                                >
                                                    <i className="fa fa-pen icon-sm text-muted" />
                                                    <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="profile_avatar_remove" />
                                                </label>
                                                <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                    data-action="cancel"
                                                    data-toggle="tooltip"
                                                    title data-original-title="Cancel avatar"
                                                >
                                                    <i className="ki ki-bold-close icon-xs text-muted" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right">Họ và tên</label>
                                        <div className="col-lg-9 col-xl-6 col-9 col-sm-10">
                                            <input className="form-control form-control-solid" type="text" defaultValue="Trung Hiếu" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-lg-3 col-3 col-sm-2 text-left text-lg-right">Cấp bậc</label>
                                        <div className="col-lg-6 col-9 col-sm-10">
                                            <select className="form-control form-control-solid selectpicker">
                                                <option>Chuyên viên</option>
                                                <option>Thiết kế đồ họa</option>
                                                <option>Lập trình game</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="form-group row">
                            <label className="col-form-label text-right col-xl-3 col-lg-3">Options Size</label>
                            <div className="col-lg-9 col-xl-6">
                                <div className="dropdown bootstrap-select form-control">
                                    <select className="form-control selectpicker" data-size={4} tabIndex="null">
                                        <option>Mustard</option>
                                        <option>Ketchup</option>
                                        <option>Relish</option>
                                        <option>Tent</option>
                                        <option>Flashlight</option>
                                        <option>Toilet Paper</option>
                                    </select>
                                    <button 
                                        type="button" 
                                        tabIndex={-1} 
                                        className="btn dropdown-toggle btn-light" 
                                        data-toggle="dropdown" 
                                        aria-owns="bs-select-3" 
                                        aria-haspopup="listbox" 
                                        aria-expanded="false"
                                    >
                                        <div className="filter-option">
                                            <div className="filter-option-inner">
                                                <div className="filter-option-inner-inner">Mustard</div>
                                            </div>
                                        </div>
                                    </button>
                                    <div className="dropdown-menu" style={{ maxHeight: '168px', overflow: 'hidden' }}>
                                        <div 
                                            className="inner show" 
                                            role="listbox" 
                                            tabIndex={-1} 
                                            aria-activedescendant="bs-select-3-0" 
                                            style={{ maxHeight: '156px', overflowY: 'auto' }}
                                        >
                                            <ul 
                                                className="dropdown-menu inner show" 
                                                role="presentation" 
                                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                            >
                                                <li className="selected active">
                                                    <a role="option" className="dropdown-item active selected" tabIndex={0} aria-setsize={6} aria-posinset={1} aria-selected="true">
                                                        <span className="text">Mustard</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="option" className="dropdown-item" id="bs-select-3-1" tabIndex={0} aria-setsize={6} aria-posinset={2}>
                                                        <span className="text">Ketchup</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="option" className="dropdown-item" id="bs-select-3-2" tabIndex={0} aria-setsize={6} aria-posinset={3}>
                                                        <span className="text">Relish</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="option" className="dropdown-item" id="bs-select-3-3" tabIndex={0} aria-setsize={6} aria-posinset={4}>
                                                        <span className="text">Tent</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="option" className="dropdown-item" id="bs-select-3-4" tabIndex={0} aria-setsize={6} aria-posinset={5}>
                                                        <span className="text">Flashlight</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="option" className="dropdown-item" id="bs-select-3-5" tabIndex={0}>
                                                        <span className="text">Toilet Paper</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-3 col-sm-2 col-form-label text-left text-lg-right">Trạng thái</label>
                                        <div className="col-lg-9 col-xl-6 col-9 col-sm-10">
                                            <span className="switch">
                                                <label>
                                                    <input type="checkbox" defaultChecked="checked" name="select" />
                                                    <span />
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-sm-2 col-3 col-form-label text-left text-lg-right">Số điện thoại</label>
                                        <div className="col-lg-9 col-xl-6 col-sm-10 col-9">
                                            <div className="input-group input-group-solid">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-phone-alt font-weight-normal" />
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control form-control-solid" defaultValue="0981.883.338" placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-sm-2 col-3 col-form-label text-left text-lg-right">Email</label>
                                        <div className="col-lg-9 col-xl-6 col-sm-10 col-9">
                                            <div className="input-group input-group-solid">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fa fa-at font-weight-normal" />
                                                    </span>
                                                </div>
                                                <input type="email" className="form-control form-control-solid" defaultValue="ngoclb@ezs.vn" placeholder="Email" />
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
    )
}