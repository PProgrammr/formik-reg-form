import React from "react";
import { Form, Field, ErrorMessage } from "formik";


function RegistrationForm() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1 className="mb-3 text-center text-danger">Registration Form</h1>
        <Form>
          <div className="form-group">
            <label htmlFor="username">
              Username
            </label>
              <Field
              name="username"
              placeholder="Username"
                className="form-control"
                id="username"
            />
            <ErrorMessage name="username" />
            </div>
            

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>
              <Field
              type="password"
              placeholder="Password"
                name="password"
                className="form-control"
                id="password"
            />
            <ErrorMessage name="password" />
            </div>
            
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primary"
            />
        </Form>
      </div>
    </div>
  );
}

export default RegistrationForm;
