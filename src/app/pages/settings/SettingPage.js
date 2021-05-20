import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import StaffList from "./Staff/StaffList";
import SidebarSetting from "../settings/SidebarSetting";
import StaffAdd from "./Staff/StaffAdd";

const SettingPage = () => {
  const match = useRouteMatch();
  return (
    <div className="row">
      <div className="col-md-3">
          <SidebarSetting />
      </div>
      <Switch>
        <Route exact path={match.url} component={StaffList}></Route>
        
        <Route
          path={`${match.url}/them-moi-nhan-vien`}
          component={StaffAdd}
        ></Route>
        <Route
          path={`${match.url}/danh-sach-nhan-vien`}
          component={StaffList}
        ></Route>
      </Switch>
    </div>
  );
};

export default SettingPage;
