import React from "react";
import { Formik, Form, Field } from "formik";
import { loginValidate } from "../login.validate";
import { Input } from "antd";
import { Button } from "antd";
import  Color  from "../../_helpers/Color";


const authForm = ({}) => (

  <Formik
    enableReinitialize
    initialValues={{
      login: "",
      password: ""
    }}
    validationSchema={loginValidate}
    onSubmit={values => {
    }}
  >
    {({ values, errors, handleChange, handleSubmit }) => (
      <Form  onSubmit={handleSubmit}>
        <Input
          type="login"
          name="login"
          placeholder="login"
          value={values.login}
          onChange={handleChange}/>
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={values.email}
          onChange={handleChange}/>

        <Button type="submit" block style={{ backgroundColor: Color.primary }}>
          Сохранить
        </Button>
      </Form>
    )}
  </Formik>
);


export default authForm;
