import { ErrorMessage, Field, useField } from 'formik';

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.placeholder}</label>

      <Field
        id={props.name}
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
    </div>
  );
};

export default Input;
