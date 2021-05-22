import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import StaffList from "./Staff/StaffList";
import SidebarSetting from "../settings/SidebarSetting";
import { Branch } from "../settings/Branch/Branch";

const SettingPage = () => {
  const match = useRouteMatch();
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3">
          <SidebarSetting />
      </div>
      <div className="col-lg-9">
        <Switch>
          <Route exact path={match.url} component={StaffList}></Route>
          <Route
            path={`${match.url}/thong-tin-co-so`}
            component={Branch}
          ></Route>
          <Route
            path={`${match.url}/danh-sach-nhan-vien`}
            component={StaffList}
          ></Route>
        </Switch>
      </div>
    </div>
  );
};

export default SettingPage;
