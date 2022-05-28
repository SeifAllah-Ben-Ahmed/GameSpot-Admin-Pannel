import { ErrorMessage, Field, useField } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../features/product/productApi';

const SelectBrand = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);
  const { brands } = useSelector((store) => store.product);

  const [field, meta] = useField('brand');

  return (
    <div className="form-group">
      <label htmlFor="brand">Brand Name</label>

      <Field
        as="select"
        id="brand"
        className={`form-control shadow-none ${
          (meta.touched && meta.error && 'is-invalid') ||
          (meta.touched && !meta.error && 'is-valid')
        }`}
        autoComplete="off"
        {...field}
        {...props}
      >
        <option value="">Select brand Name</option>
        {brands?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.brand}
          </option>
        ))}
      </Field>
      <ErrorMessage
        component="div"
        className="invalid-feedback"
        name={field.name}
      />
    </div>
  );
};

export default SelectBrand;
