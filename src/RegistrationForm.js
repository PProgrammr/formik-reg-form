import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import "./RegistrationForm.css";
import { validatePassword } from "./validation";

function RegistrationForm(props) {
  return (
    <div className="row" >
      <div className="col-md-8 offset-2">
        <div className="mb-3 text-center mt-3">
          <h2>Register</h2>
          <p className="text-muted">Create your account. Its free and only takes a minute.</p>
        </div>

        <Form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              name="username"
              placeholder="Username"
              className="form-control"
              id="username"
            />
            <ErrorMessage
              name="username"
              render={(msg) => {
                return <span className="invalid-feedback">{msg}</span>;
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
              id="password"
              validate={validatePassword}
            />
            <ErrorMessage
              name="password"
              render={(msg) => <span className="invalid-feedback">{msg}</span>}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              placeholder="you@example.com"
              name="email"
              className="form-control"
              id="email"
            />
            <ErrorMessage
              name="email"
              render={(msg) => <span className="invalid-feedback">{msg}</span>}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cemail">Confirm Email</label>
            <Field
              type="text"
              placeholder="you@example.com"
              name="confirmEmail"
              className="form-control"
              id="cemail"
            />
            <ErrorMessage
              name="confirmEmail"
              render={(msg) => <span className="invalid-feedback">{msg}</span>}
            />
          </div>

          <div className="form-group pb-2">
            <div className="custom-control custom-checkbox">
              <Field
                type="checkbox"
                name="accepted"
                id="accepts"
                className="custom-control-input"
              />
              <label htmlFor="accepts" className="custom-control-label">
                I accepts the Terms of Use & Privacy Policy.
                </label>
            </div>
          </div>

          <input type="submit" value="Sign Up" className="btn btn-primary btn-block" />
        </Form>
        <pre>{JSON.stringify(props,null,2)}</pre>
      </div>
    </div>
  );
}

export default RegistrationForm;
