import { ErrorMessage, Field, useField } from 'formik';
import { useSelector } from 'react-redux';

const CategorySelect = (props) => {
  const { categories } = useSelector((store) => store.product);

  const [field, meta] = useField({ ...props });

  return (
    <div className="form-group">
      <label htmlFor="category">Categorie Parent</label>
      <div className="col">
        <Field
          as="select"
          id="category"
          className={`form-control shadow-none ${
            (meta.touched && meta.error && 'is-invalid') ||
            (meta.touched && !meta.error && 'is-valid')
          }`}
          autoComplete="off"
          {...field}
          {...props}
        >
          <option value="">Select Category Parent</option>
          {categories
            ?.filter(
              (el) => !el.parent && el.name !== props.formik?.values.name
            )
            .map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
        </Field>
        <ErrorMessage
          component="div"
          className="invalid-feedback"
          name={field.name}
        />
      </div>
    </div>
  );
};

export default CategorySelect;
