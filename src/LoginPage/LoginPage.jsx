import React from "react";
import { Wrapper } from "./login.styles";
import { loginValidate } from "./login.validate";
import { ErrorMessage, Form, Formik } from "formik";
import Color from "../_helpers/Color";
import Button from "@material-ui/core/Button";
import { login } from "./login.actions";
import { connect } from "react-redux";
import { Input } from "antd";

function LoginPage({ login }) {
  return (
    <Wrapper>
      <h4 style={{ marginBottom: "15px" }}>Авторизация</h4>
      <Formik
        enableReinitialize
        initialValues={{
          login: "",
          password: ""
        }}
        validationSchema={loginValidate}
        onSubmit={values => {
          login(values.login, values.password);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="login"
              name="login"
              placeholder="Логин"
              value={values.login}
              onChange={handleChange}
              required={false}
            />
            <div>
              <ErrorMessage name="login" />
            </div>
            <Input
              style={{ marginTop: "15px" }}
              type="password"
              name="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
            />
            <div>
              <ErrorMessage name="password" />
            </div>
            <Button
              className="ddd"
              type="submit"
              style={{
                marginTop: "15px",
                backgroundColor: Color.primary,
                width: "100%",
                color: "white"
              }}
            >
              Сохранить
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

const mapStateProp = state => {
  console.log(state);

  return {
    state
  };
  /*({
    state
  });*/
};

export default connect(
  mapStateProp,
  { login }
)(LoginPage);
