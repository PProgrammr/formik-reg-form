import React from "react";
import { Formik } from "formik";
import RegistrationForm from "./RegistrationForm";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  email: yup
    .string()
    .email("Please provide a valid Email address")
    .required("Email is required"),
  confirmEmail: yup
    .string()
    .required("Confirm Email is required")
    .test("match-password", "Your email address does not match", function (
      value
    ) {
      return this.parent.email === value;
    }),
  accepted: yup
    .bool()
    .test(
      "accept",
      "You must accept our terms and condition",
      (val) => val === true
    ),
});

function RegistrationFormContainer() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        confirmEmail: "",
        accepted: false,
      }}
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
