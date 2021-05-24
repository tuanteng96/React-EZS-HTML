import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import KTLayoutAsideMenu from "../../../_metronic/_assets/js/layout/base/aside-menu";
import { checkIsActive } from "../../../_metronic/_helpers";
import { NavLink } from "react-router-dom";
import { KTUtil } from "../../../_metronic/_assets/js/components/util";

const SidebarSetting = () => {
    const location = useLocation();
    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url)
            ? ` ${!hasSubmenu &&
            "menu-item-active"} menu-item-open menu-item-not-hightlighted`
            : "";
    };

    useLayoutEffect(() => {
        KTUtil.ready(function () {
            KTLayoutAsideMenu.init("kt_aside_setting");
        });
    }, [])

    return (
        <div
            id="kt_aside_setting"
            data-menu-vertical="1"
            className="aside-menu"
        >
            <ul className="menu-nav flex-column bg-white">
                <li className="menu-section m-0">
                    <h4 className="menu-text">Cài đặt</h4>
                    <i className="menu-icon flaticon-more-v2"></i>
                </li>
                <li
                    className={`menu-item ${getMenuItemActive("/s4", false)}`}
                    aria-haspopup="true"
                >
                    <NavLink className="menu-link" to="/settings/thong-tin-co-so">
                        <span className="menu-text">Thông tin cơ sở</span>
                    </NavLink>
                </li>
                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/a1",
                        true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/a1">
                        <span className="menu-text">Nhân viên</span>
                        <i className="menu-arrow" />
                    </NavLink>
                    <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                            <li
                                className="menu-item  menu-item-parent"
                                aria-haspopup="true"
                            >
                                <span className="menu-link">
                                    <span className="menu-text">nhân viên</span>
                                </span>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive(
                                    "/error/error-v1"
                                )}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/settings/them-moi-nhan-vien">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Thêm mới nhân viên</span>
                                </NavLink>
                            </li>
                            {/*begin::2 Level*/}
                            <li
                                className={`menu-item ${getMenuItemActive(
                                    "/error/error-v1"
                                )}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/settings/danh-sach-nhan-vien">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Danh sách nhân viên</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}
                            <li
                                className={`menu-item ${getMenuItemActive("/a3")}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a3">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Cấp bậc nhân viên</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}
                        </ul>
                    </div>
                </li>
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/a1",
                        true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/a1">
                        <span className="menu-text">Sản phẩm</span>
                        <i className="menu-arrow" />
                    </NavLink>
                    <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                            <li
                                className="menu-item  menu-item-parent"
                                aria-haspopup="true"
                            >
                                <span className="menu-link">
                                    <span className="menu-text">Sản phẩm</span>
                                </span>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive(
                                    "/error/error-v1"
                                )}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a2">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Thêm mới sản phẩm</span>
                                </NavLink>
                            </li>
                            {/*begin::2 Level*/}
                            <li
                                className={`menu-item ${getMenuItemActive(
                                    "/error/error-v1"
                                )}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a2">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Danh sách sản phẩm</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}
                            <li
                                className={`menu-item ${getMenuItemActive("/a3")}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a3">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Nhóm sản phẩm</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("/a3")}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a3">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Thương hiệu</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}
                        </ul>
                    </div>
                </li>
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/a1",
                        true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/a1">
                        <span className="menu-text">Dịch vụ</span>
                        <i className="menu-arrow" />
                    </NavLink>
                    <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                            <li
                                className="menu-item  menu-item-parent"
                                aria-haspopup="true"
                            >
                                <span className="menu-link">
                                    <span className="menu-text">Dịch vụ</span>
                                </span>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive(
                                    "/error/error-v1"
                                )}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a2">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Thêm mới dịch vụ</span>
                                </NavLink>
                            </li>
                            {/*begin::2 Level*/}
                            <li
                                className={`menu-item ${getMenuItemActive(
                                    "/error/error-v1"
                                )}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a2">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Danh sách dịch vụ</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}
                            <li
                                className={`menu-item ${getMenuItemActive("/a3")}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a3">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Nhóm dịch vụ</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("/a3")}`}
                                aria-haspopup="true"
                            >
                                <NavLink className="menu-link" to="/a3">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span />
                                    </i>
                                    <span className="menu-text">Phụ phí</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}
                        </ul>
                    </div>
                </li>
                <li
                    className={`menu-item ${getMenuItemActive("/s4", false)}`}
                    aria-haspopup="true"
                >
                    <NavLink className="menu-link" to="/s4">
                        <span className="menu-text">Thẻ tiền</span>
                    </NavLink>
                </li>
                <li
                    className={`menu-item ${getMenuItemActive("/s4", false)}`}
                    aria-haspopup="true"
                >
                    <NavLink className="menu-link" to="/s4">
                        <span className="menu-text">Cấu hình hóa đơn</span>
                    </NavLink>
                </li>
                <li
                    className={`menu-item ${getMenuItemActive("/s4", false)}`}
                    aria-haspopup="true"
                >
                    <NavLink className="menu-link" to="/s4">
                        <span className="menu-text">Kênh kết nối</span>
                    </NavLink>
                </li>
                <li
                    className={`menu-item ${getMenuItemActive("/s4", false)}`}
                    aria-haspopup="true"
                >
                    <NavLink className="menu-link" to="/s4">
                        <span className="menu-text">Cài đặt khác</span>
                    </NavLink>
                </li>
                {/*end::1 Level*/}
            </ul>
        </div>
    )
}

export default SidebarSetting;