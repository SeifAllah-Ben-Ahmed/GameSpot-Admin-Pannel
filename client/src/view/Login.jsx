import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Loading from '../components/Loading';
import { login } from '../features/auth/authApi';
import { authSchema } from '../models/auth';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, isLoading } = useSelector((store) => store.auth);

  isAuth && navigate('/', { replace: true });

  return (
    <Formik
      onSubmit={async (values, actions) => {
        dispatch(login(values));
      }}
      initialValues={initialValues}
      validationSchema={authSchema}
    >
      {(formik) => (
        <Form method="post" encType="multipart/form-data">
          <main className="container min-vh-100 d-flex flex-column justify-content-center">
            <img
              className="mb-4"
              src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw246d832e/images/svg-icons/logo-gs-2.svg"
              alt="logo"
              height="50"
            />
            <h1 className="h3 text-muted mb-3 fw-normal">Please sign in</h1>

            <div className="mb-3">
              <Input placeholder="Email" name="email" type="email" />
            </div>
            <div className="mb-3">
              <Input placeholder="Password" name="password" type="password" />
            </div>

            <button className="w-100 btn btn-lg btn-danger" type="submit">
              {isLoading ? <Loading btn /> : 'Sign in'}
            </button>
          </main>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
