import { Field, getIn } from 'formik';
import React from 'react';

const ErrorMessage = ({ name }) => (
  <Field name={name}>
    {({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null;
    }}
  </Field>
);

export default ErrorMessage;
