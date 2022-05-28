import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../features/product/productApi';
import { categorySchema } from '../../models/product';
import CategorySelect from '../CategorySelect';
import Input from '../Input';

const CategoryForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    parent: '',
    name: '',
  };
  return (
    <Formik
      onSubmit={async (values, actions) => {
        dispatch(createCategory(values));
        actions.resetForm();
      }}
      initialValues={initialValues}
      validationSchema={categorySchema}
    >
      {(formik) => (
        <Form method="post" encType="multipart/form-data">
          <h3 className="fw-normal text-muted mb-3">Add new Category</h3>
          <div className="mb-3">
            <Input
              formik={formik}
              placeholder="Category Name"
              name="name"
              type="text"
            />
          </div>
          <div className="mb-3">
            <CategorySelect
              formik={formik}
              name="parent"
              label={'Category parent'}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn my-3 btn-danger btn-lg" type="submit">
              Add Category
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CategoryForm;
