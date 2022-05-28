import { ErrorMessage, Field, getIn } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../features/product/productApi';

const CategoryAndSubSelect = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const { categories } = useSelector((store) => store.product);
  const errorField = (name) => {
    const error = getIn(props.form.errors, name);
    const touch = getIn(props.form.touched, name);
    return [error && touch, !error && touch];
  };
  return (
    <>
      <div className="col">
        <label> Category Name</label>
        <Field
          as="select"
          name={`category`}
          className={`form-control shadow-none ${
            (errorField('category')[0] && 'is-invalid') ||
            (errorField('category')[1] && 'is-valid')
          } `}
        >
          <option value="">select Category</option>
          {categories
            ?.filter((el) => !el.parent)
            .map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
        </Field>

        <ErrorMessage
          component="div"
          className="invalid-feedback"
          name="category"
        />
      </div>
      <div className="col">
        {props.form.values.category && (
          <>
            <label>Sub Category Name</label>
            <Field
              as="select"
              className={`form-control shadow-none  `}
              name={`subCategory`}
            >
              <option value="">select Sub Category</option>
              {categories
                ?.filter(
                  (obj) => obj.parent?._id === props.form.values.category
                )
                ?.map((el) => (
                  <option key={el._id} value={el._id}>
                    {el.name}
                  </option>
                ))}
            </Field>
            <ErrorMessage
              component="div"
              className="invalid-feedback"
              name="subCategory"
            />
          </>
        )}
      </div>
    </>
  );
};

export default CategoryAndSubSelect;
