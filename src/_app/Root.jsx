import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Notification  from "../Notification/Notification";
import withLocalization from "../_hoc/withLocalization";
import routers from "../_helpers/routers";
import ProtectedRoute from "../_ui/ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import createNotification from "../StyleProvider/CreateNotification";

const Root = () => (
  <>
    <Notification/>
    <div className="container">
      <Switch>
        {routers.map(route => (
          <ProtectedRoute key={route.path} {...route} />
        ))}
        <Route render={() => (
          <div>Упс страница не найдена</div>
        )}/>
      </Switch>
    </div>
  </>
);

export default compose(
  withRouter,
  withLocalization
)(Root);


