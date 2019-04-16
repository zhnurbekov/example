import React from "react";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

const Root = props => (
  <>
    <NotificationContainer />
    Root
  </>
);

export default withRouter(Root);
