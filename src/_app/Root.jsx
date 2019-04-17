import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import withLocalization from "../_hoc/withLocalization";
import { changeLocale } from "../components/LocaleProvider/LocaleDucks";
import Message from "../_ui/Message";

const Root = (props) => {
  const { iMessage, changeLocale, lang } = props;
  return (
    <>
      <NotificationContainer />
      lang: {lang} <br />
      {iMessage('test_message')} <br />
      <Message id="test_message"/> <br />
      <button onClick={() => changeLocale("ru")}>ru</button>
      <button onClick={() => changeLocale("kk")}>kk</button>
      <button onClick={() => changeLocale("en")}>en</button>
    </>
  );
};

const dispathProps = {
  changeLocale: changeLocale
};

export default compose(
  withRouter,
  withLocalization,
  connect(null, dispathProps)
)(Root);


