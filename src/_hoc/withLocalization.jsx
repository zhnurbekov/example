import React from "react";
import { injectIntl } from "react-intl";

const withLocalization = Component => {
  class WithLocalization extends React.Component {
    render() {
      const { intl, ...otherProps } = this.props;
      return (
        <Component
          {...otherProps}
          iMessage={param => {
            if (param instanceof Object) {
              return intl.formatHTMLMessage(param);
            } else {
              return intl.formatHTMLMessage({ id: param });
            }
          }}
          lang={intl.locale}
        />
      );
    }
  }

  return injectIntl(WithLocalization);
};

export default withLocalization;
