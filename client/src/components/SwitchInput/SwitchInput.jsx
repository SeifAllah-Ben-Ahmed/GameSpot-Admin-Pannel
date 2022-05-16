import { ErrorMessage, useField } from 'formik';
const SwitchInput = ({ lable, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="form-check form-switch ">
      <input
        {...field}
        {...props}
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={field.value}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {lable}
      </label>
      <ErrorMessage
        component="div"
        className="invalid-feedback"
        name={field.name}
      />
    </div>
  );
};

export default SwitchInput;
