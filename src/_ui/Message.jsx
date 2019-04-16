import React from "react";
import PropTypes from "prop-types";
import { FormattedHTMLMessage } from "react-intl";

export default function Message(props) {
  return <FormattedHTMLMessage {...props} />;
}

Message.propTypes = {
  id: PropTypes.string.isRequired
};
