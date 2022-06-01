import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  name: Yup.string().required('User Name is Required'),
  email: Yup.string().required('User email is Required').email(),
  password: Yup.string().required('User password is Required'),
  passwordConfirm: Yup.string()
    .required('User Password Confirm is Required')
    .test({
      message: 'Password Confirm and password does not match',
      test: function (value) {
        return value === this.parent.password;
      },
    }),
});
