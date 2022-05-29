import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import { createUser } from '../features/user/userApi';
import { userSchema } from '../models/user';

const AddUser = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: undefined,
  };
  return (
    <Formik
      onSubmit={async (values, actions) => {
        dispatch(createUser(values));
      }}
      initialValues={initialValues}
      validationSchema={userSchema}
    >
      {(formik) => (
        <Form method="post" encType="multipart/form-data">
          <h3 className="fw-normal text-muted mb-3">Add new User</h3>
          <div className="mb-3">
            <Input formik={formik} placeholder="Name" name="name" type="text" />
          </div>
          <div className="mb-3">
            <Input
              formik={formik}
              placeholder="E-mail"
              name="email"
              type="email"
            />
          </div>
          <div className="row">
            <div className="mb-3 col">
              <Input
                formik={formik}
                placeholder="password"
                name="password"
                type="password"
              />
            </div>

            <div className="mb-3 col">
              <Input
                formik={formik}
                placeholder="Confirm Password"
                name="passwordConfirm"
                type="password"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor=""> Role</label>
            <Field
              as="select"
              id="category"
              className={`form-control shadow-none`}
              autoComplete="off"
              name="role"
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </Field>
          </div>
          <div className="d-grid gap-2">
            <button className="btn my-3 btn-danger btn-lg" type="submit">
              Add User
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddUser;
