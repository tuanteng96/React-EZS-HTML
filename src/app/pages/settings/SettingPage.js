import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import StaffList from "./Staff/StaffList";
import SidebarSetting from "../settings/SidebarSetting";
import { Branch } from "../settings/Branch/Branch";
import { StaffAdd } from "./Staff/StaffAdd";
import { EditEmployee } from "./Staff/EditEmployee";
import { AddDecentral } from "./Decentral/AddDecentral";
import { AddEmployee } from "./Staff/AddEmployee";

const SettingPage = () => {
  const match = useRouteMatch();
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3">
          <SidebarSetting />
      </div>
      <div className="col-lg-9">
        <Switch>
          <Route exact path={match.url} component={Branch}></Route>
          <Route path={`${match.url}/thong-tin-co-so`} component={Branch}></Route>
          <Route
            path={`${match.url}/danh-sach-nhan-vien`}
            component={StaffList}
          ></Route>
          <Route
            path={`${match.url}/them-moi-nhan-vien`}
            component={StaffAdd}
          ></Route>
          <Route
            path={`${match.url}/chinh-sua-nhan-vien`}
            component={EditEmployee}
          ></Route>
          <Route
            path={`${match.url}/chinh-sua-phan-quyen`}
            component={AddDecentral}
          ></Route>
          <Route
            path={`${match.url}/them-moi-nhan-vien1`}
            component={AddEmployee}
          ></Route>
        </Switch>
      </div>
    </div>
  );
};

export default SettingPage;
