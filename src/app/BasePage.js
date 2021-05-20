import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { UserList } from "../app/pages/UserList";
import { ListBranch } from '../app/pages/ListBranch'
import { ManagerEmployee } from '../app/pages/ManagerEmployee'
import { EditContact } from "./pages/EditContact";
import { EditAccount } from "./pages/EditAccount";
import { AddAccount } from "./pages/AddAccount";
import { AddEmployee } from "./pages/AddEmployee";
import { Decentral } from "./pages/Decentral";
import { EditDecentral } from "./pages/EditDecentral";
import { Setting } from "./pages/Setting";
import SettingPage from "./pages/settings/SettingPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);


export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/user-list" component={UserList} />
        <Route path="/list-branch" component={ListBranch} />
        <Route path="/manager" component={ManagerEmployee} />
        <Route path="/edit-contact" component={EditContact} />
        <Route path="/edit-account" component={EditAccount} />
        <Route path="/add-employee" component={AddEmployee} />
        <Route path="/add-account" component={AddAccount} />
        <Route path="/decentral" component={Decentral} />
        <Route path="/edit-decentral" component={EditDecentral} />
        <Route path="/setting" component={Setting} />
        <Route path="/settings" component={SettingPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
