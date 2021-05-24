import React from "react";
import "../../../../_metronic/_assets/sass/pages/Decentral/Decentral.scss";

export const AddDecentral = () => {
  return (
    <div className="decentral-wrap">
      <div
        className="wizard wizard-4"
        id="kt_wizard"
        data-wizard-state="first"
        data-wizard-clickable="true"
      >
        <div className="wizard-nav">
          <div className="wizard-steps">
            <div
              className="wizard-step"
              data-wizard-type="step"
              data-wizard-state="pending"
            >
              <div className="wizard-wrapper">
                <div className="wizard-number">1</div>
                <div className="wizard-label">
                  <div className="wizard-bold wizard-primary">Thông tin</div>
                  <div className="wizard-desc d-none d-lg-block">
                    Cập nhật thông tin cá nhân
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wizard-step"
              data-wizard-type="step"
              data-wizard-state="pending"
            >
              <div className="wizard-wrapper">
                <div className="wizard-number">2</div>
                <div className="wizard-label">
                  <div className="wizard-bold">Tài khoản</div>
                  <div className="wizard-desc d-none d-lg-block">
                    Tên đăng nhập và mật khẩu
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div className="wizard-wrapper">
                <div className="wizard-number">3</div>
                <div className="wizard-label">
                  <div className="wizard-bold">Phân quyền</div>
                  <div className="wizard-desc d-none d-lg-block">
                    Cấp quyền truy cập hệ thống
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wizard-step"
              data-wizard-type="step"
              data-wizard-state="pending"
            >
              <div className="wizard-wrapper">
                <div className="wizard-number">4</div>
                <div className="wizard-label">
                  <div className="wizard-bold">Cài đặt</div>
                  <div className="wizard-desc d-none d-lg-block">
                    Cấu hình ngày công, lương
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="branch">
        <div className="branch-content text-center">
          <h3 className="branch-title text-uppercase text-white">Chi nhánh</h3>
          <div
            class="mt-10 btn-wrap flex-column flex-lg-row w-100 w-lg-auto list-btn"
            role="group"
          >
            <button
              type="button"
              class="btn btn-primary round-radius btn-lg font-weight-bold active mb-3 mb-lg-0"
            >
              Hà Nội
            </button>
            <button
              type="button"
              class="btn btn-white btn-lg font-weight-bold mb-3 mb-lg-0"
            >
              Hồ Chí Minh
            </button>
            <button
              type="button"
              class="btn btn-white btn-lg font-weight-bold mb-3 mb-lg-0"
            >
              Đà Nẵng
            </button>
          </div>
        </div>
      </div>

      <div className="manager-decentral">
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex align-items-center justify-content-end border-bottom py-2">
            <div className="col-lg-2 pr-0 col-sm-3">
              <div className="check-decentral pl-sm-10 pl-lg-0">
                <label className="checkbox">
                  <input type="checkbox" checked="checked" />
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
            <div className="col-lg-3 col-sm-3 pl-0">
              <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                Quản lý khách hàng
              </h5>
            </div>
            <div className="col-lg-7 col-sm-6 pl-0">
              <p className="desc m-0 font-weight-bold pl-0">
                Tạo mới khách hàng, đơn hàng, đặt lịch dịch vụ, thanh toán, ...
              </p>
            </div>
            <div className="col-lg-2 pr-0 col-sm-3">
              <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                <label className="checkbox">
                  <input type="checkbox" checked="checked" />
                  <span></span>
                </label>
                <button
                  type="button"
                  className="btn btn-light-primary btn-sm font-weight-boldest"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
            <div className="col-lg-3 pl-0 col-sm-3">
              <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                Quản lý kho
              </h5>
            </div>
            <div className="col-lg-7 col-sm-6 pl-0">
              <p className="desc m-0 font-weight-bold pl-0">
                Nhập xuất kho sản phẩm thương mại, quản lý vật liệu tiêu hao khi
                làm dịch vụ, ...
              </p>
            </div>
            <div className="col-lg-2 pr-0 col-sm-3">
              <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <button
                  type="button"
                  className="btn btn-light-primary btn-sm font-weight-boldest"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
            <div className="col-lg-3 pl-0 col-sm-3">
              <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                Quản lý thu - chi
              </h5>
            </div>
            <div className="col-lg-7 col-sm-6 pl-0">
              <p className="desc m-0 font-weight-bold pl-0">
                Quản lý quỹ, tạo mới thu chi tại chi nhánh, thu chi nhân sự tính
                toán lương nhân viên, ...
              </p>
            </div>
            <div className="col-lg-2 pr-0 col-sm-3">
              <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                <label className="checkbox">
                  <input type="checkbox" checked="checked" />
                  <span></span>
                </label>
                <button
                  type="button"
                  className="btn btn-light-primary btn-sm font-weight-boldest"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
            <div className="col-lg-3 pl-0 col-sm-3">
              <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                Kĩ thuật viên
              </h5>
            </div>
            <div className="col-lg-7 col-sm-6 pl-0">
              <p className="desc m-0 font-weight-bold pl-0">
                Nhân viên làm dịch vụ cho khách hàng.
              </p>
            </div>
            <div className="col-lg-2 pr-0 col-sm-3">
              <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <button
                  type="button"
                  className="btn btn-light-primary btn-sm font-weight-boldest"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex align-items-center justify-content-between border-bottom py-2">
            <div className="col-lg-3 pl-0 col-sm-3">
              <h5 className="decentral-title font-weight-boldest p-4 mb-0">
                Quản lý chi nhánh
              </h5>
            </div>
            <div className="col-lg-7 col-sm-6 pl-0">
              <p className="desc m-0 font-weight-bold pl-0">
                Thống kê báo cáo hoạt động của chi nhánh, ...
              </p>
            </div>
            <div className="col-lg-2 pr-0 col-sm-3">
              <div className="check-decentral d-flex justify-content-between pl-sm-10 pl-lg-0">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <button
                  type="button"
                  className="btn btn-light-primary btn-sm font-weight-boldest"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="decentral-item px-16 text-size bg-white">
          <div className="row d-flex justify-content-end py-10">
            <div className="col-10 pr-0">
              <div className="btn-wrap d-flex justify-content-end">
                <button className="btn btn-clean btn-sm px-9 py-4 font-weight-bold mr-2">
                  Quay lại
                </button>
                <button className="btn btn-primary btn-sm font-weight-bold px-9 py-4">
                  Tiếp theo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
