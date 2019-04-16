import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import withLocalization from "../_hoc/withLocalization";

const Root = props => {
  console.log(props)
  return (
    <>
      <NotificationContainer />
      Root
      {props.iMessage('test_message')}
    </>
  )
};

export default compose(
  withRouter,
  withLocalization
)(Root);
