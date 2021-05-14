import React from 'react';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import '../../_metronic/_assets/sass/pages/ListBranch/ListBranch.scss';

export const EditContact = () => {
    return (
        <div className="card card-custom">
            <div className="card-navbar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <span className="nav-icon">
                                <i class="fas fa-layer-group"></i>
                            </span>
                            <span className="nav-text">Thông tin</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="nav-icon">
                                <i class="fas fa-user"></i>
                            </span>
                            <span className="nav-text">Tài khoản</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="nav-icon">
                                <i class="fas fa-truck"></i>
                            </span>
                            <span className="nav-text">Phân quyền</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}