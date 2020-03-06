import React from "react";
import { Formik } from "formik";
import RegistrationForm from "./RegistrationForm";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required")
});

function RegistrationFormContainer() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
      validationSchema={schema}
      component={RegistrationForm}
    />
  );
}

export default RegistrationFormContainer;
