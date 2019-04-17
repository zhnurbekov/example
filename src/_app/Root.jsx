import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import withLocalization from "../_hoc/withLocalization";
import routers from "../_helpers/routers";
import ProtectedRoute from "../_ui/ProtectedRoute";

const Root = () => (
  <>
    <NotificationContainer />

    <div className="container">
      {routers.map(route => (
        <ProtectedRoute key={route.path} {...route} />
      ))}
    </div>
  </>
);

export default compose(
  withRouter,
  withLocalization
)(Root);
