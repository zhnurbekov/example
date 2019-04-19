import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { module as loginModule } from "../LoginPage/login.constants";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => {

      if (rest.loading) {
        return <div>loading...</div>;
      }

      // если не авторизован
      if (!rest.withoutAuth && rest.user === null) {
        return <Redirect to="/login" />;
      }

      if (rest.user && rest.path === '/login') {
        return <Redirect to="/" />
      }

      return <Component {...routeProps} />;
    }}
  />
);

const mapStateToProps = state => ({
  user: state[loginModule].user,
  loading: state[loginModule].loading
});

export default connect(mapStateToProps)(ProtectedRoute);
