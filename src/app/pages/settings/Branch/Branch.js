import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export const Branch = () => {
    const [show, setShow] = useState(false);
    const [showProfile, setShowProfile] = useState(false)
    const handleClose = () => {
        setShow(false);
    }
    const modalOpen = () => {
        setShow(true);
    }

    const handleCloseBtn = () => {
        setShowProfile(false)
    }

    const handleOpenBtn = () => {
        setShowProfile(true)
    }

    return (
        <div className="row">
            <div className="col-xl-4 col-lg-4 mb-sm-4 mb-lg-0">
                <div className="card card-custom">
                    <div className="card-body pt-4">
                        <div className="d-flex justify-content-end">
                            <div className="dropdown dropdown-inline" onClick={() => handleOpenBtn()}>
                                <a
                                    href="#"
                                    className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="ki ki-bold-more-hor" />
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="symbol symbol-60 symbol-xxl-75 mr-5 align-self-start align-self-xxl-center">
                                <div
                                    className="symbol-label"
                                    style={{
                                        backgroundImage:
                                            'url("https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_13.jpg")',
                                    }}
                                />
                                <i className="symbol-badge bg-success" />
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
                                >
                                    Cser Beauty & Spa
                                </a>
                                <div className="text-muted">0981.883.338</div>
                            </div>
                        </div>
                        <div className="pt-8 pb-6">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span className="font-weight-bold mr-2">Email:</span>
                                <a href="#" className="text-muted text-hover-primary">
                                    lienhe@ezs.vn
                                </a>
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
                            <div className="wrapper-list">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Website</span>
                                    <span className="text-muted">google.vn</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">youtube</span>
                                    <span className="text-muted">thayhuan</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="font-weight-bold mr-2">Tên thương hiệu</span>
                                    <span className="text-muted">EZS</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="btn btn-light-success font-weight-bold py-3 px-6 mb-2 text-center btn-block"
                        >
                            View more
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 col-lg-8 mt-lg-0">
                <div className="card card-custom card-stretch">
                    <div className="card-header border-0">
                        <h3 className="card-title font-weight-bolder text-dark">
                            Danh sách chi nhánh
                        </h3>
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
                                            <a
                                                href="#"
                                                className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1"
                                            >
                                                Cser Hà Nội
                                            </a>
                                            <span className="text-muted font-weight-bold address">
                                                Acm building 22/42 Vũ Ngọc Phan, Hà Nội
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex align-items-center justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-none d-sm-inline-flex d-lg-inline-flex ">
                                            Hoạt động
                                        </span>
                                        <a
                                            href="javascript:;"
                                            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex"
                                            title="Edit details"
                                            onClick={() => modalOpen()}
                                        >
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
                                            <a
                                                href="#"
                                                className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1"
                                            >
                                                Cser Hà Nội
                                            </a>
                                            <span className="text-muted font-weight-bold address">
                                                Acm building 22/42 Vũ Ngọc Phan, Hà Nội
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex align-items-center justify-content-between pl-10">
                                        <span class="label label-lg label-light-warning label-inline font-weight-bold py-4 d-none d-sm-inline-flex d-lg-inline-flex">
                                            Đóng
                                        </span>
                                        <a
                                            href="javascript:;"
                                            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex"
                                            title="Edit details"
                                            onClick={() => modalOpen()}
                                        >
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
                                            <a
                                                href="#"
                                                className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1"
                                            >
                                                BrandName + Cơ sở 3
                                            </a>
                                            <span className="text-muted font-weight-bold address">
                                                Đang cập nhật địa chỉ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex align-items-center justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-lg-inline-flex d-none d-sm-inline-flex">
                                            Hoạt động
                                        </span>
                                        <a
                                            href="javascript:;"
                                            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex"
                                            title="Edit details"
                                            onClick={() => modalOpen()}
                                        >
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
                                            <a
                                                href="#"
                                                className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1"
                                            >
                                                BrandName + Cơ sở 4
                                            </a>
                                            <span className="text-muted font-weight-bold address">
                                                Đang cập nhật địa chỉ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex align-items-center justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-lg-inline-flex d-none d-sm-inline-flex">
                                            Hoạt động
                                        </span>
                                        <a
                                            href="javascript:;"
                                            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex"
                                            title="Edit details"
                                            onClick={() => modalOpen()}
                                        >
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
                                            <a
                                                href="#"
                                                className="text-dark-75 font-weight-boldest text-hover-primary font-size-lg mb-1"
                                            >
                                                BrandName + Cơ sở 5
                                            </a>
                                            <span className="text-muted font-weight-bold address">
                                                Đang cập nhật địa chỉ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-5 col-4">
                                    <div className="d-flex align-items-center justify-content-between pl-10">
                                        <span class="label label-lg label-light-primary label-inline font-weight-bold py-4 d-lg-inline-flex d-none d-sm-inline-flex">
                                            Hoạt động
                                        </span>
                                        <a
                                            href="javascript:;"
                                            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2 btn-size d-none d-sm-inline-flex d-lg-inline-flex"
                                            title="Edit details"
                                            onClick={() => modalOpen()}
                                        >
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton className="p-6">
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Thông tin cơ sở
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-0">
                    <form className="form">
                        <div className="form-group row align-items-center">
                            <div className="col-lg-3">
                                <label>Tên cơ sở</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-3">
                                <label htmlFor="address">Địa chỉ</label>
                            </div>
                            <div className="col-lg-9">
                                <input id="address" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-3">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-lg-9">
                                <input id="email" type="email" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-3">
                                <label htmlFor="fanpage">Fanpage</label>
                            </div>
                            <div className="col-lg-9">
                                <input id="fanpage" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-3">
                                <label htmlFor="Hotline">Hotline</label>
                            </div>
                            <div className="col-lg-9">
                                <input id="Hotline" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-3">
                                <label>Giờ mở cửa</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-3 col-form-label">Trạng thái</label>
                            <div className="col-3">
                                <span className="switch">
                                    <label>
                                        <input type="checkbox" defaultChecked="checked" name="select" />
                                        <span />
                                    </label>
                                </span>
                            </div>
                        </div>
                        </form>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="light" onClick={handleClose}>
                        Quay lại
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={showProfile} onHide={handleCloseBtn} size="lg">
                <Modal.Header closeButton className="p-6">
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Thông tin cơ sở
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-0 p-10">
                    <form className="form">
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="branch">Tên thương hiệu</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="branch" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label>Link truy cập</label>
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control form-control-solid" placeholder="cser.ezs.vn" disabled />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="address">Địa chỉ</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="address" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="phonenumber">Điện thoại</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="phonenumber" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="email" type="email" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="website">Website</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="website" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label>Logo</label>
                            </div>
                            <div className="col-lg-8">
                                <div className="image-input image-input-outline">
                                    <div className="image-input-wrapper" style={{backgroundImage: 'url("https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/blank.png")'}} />
                                    <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" data-original-title="Change avatar">
                                        <i className="fa fa-pen icon-sm text-muted" />
                                        <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                        <input type="hidden" name="profile_avatar_remove" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="fanpage">Fanpage</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="fanpage" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="youtube">Youtube</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="youtube" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4">
                                <label htmlFor="instagram">Instagram</label>
                            </div>
                            <div className="col-lg-8">
                                <input id="instagram" type="text" className="form-control form-control-solid" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="light" onClick={handleCloseBtn}>
                        Quay lại
                    </Button>
                    <Button variant="primary" onClick={handleCloseBtn}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
