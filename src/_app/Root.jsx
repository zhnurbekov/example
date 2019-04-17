import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import withLocalization from "../_hoc/withLocalization";
import { changeLocale } from "../LocaleProvider/locale.actions";
import Text from "../_ui/Text";

const Root = ({ text, changeLocale, lang }) => {
  return (
    <>
      <NotificationContainer />
      lang: {lang} <br />
      {text('Тестовое сообщение')} <br />
      <Text id="Тестовое сообщение"/> <br />
      <button onClick={() => changeLocale("ru")}>ru</button>
      <button onClick={() => changeLocale("kk")}>kk</button>
      <button onClick={() => changeLocale("en")}>en</button>
    </>
  );
};

export default compose(
  withRouter,
  withLocalization,
  connect(null, {changeLocale})
)(Root);


