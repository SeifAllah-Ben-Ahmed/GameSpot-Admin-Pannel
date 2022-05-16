import { ErrorMessage, Field, useField } from 'formik';

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Field
        className={`form-control shadow-none ${
          (meta.touched && meta.error && 'is-invalid') ||
          (meta.touched && !meta.error && 'is-valid')
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />

      <ErrorMessage
        component="div"
        className="invalid-feedback"
        name={field.name}
      />
    </>
  );
};

export default Input;
