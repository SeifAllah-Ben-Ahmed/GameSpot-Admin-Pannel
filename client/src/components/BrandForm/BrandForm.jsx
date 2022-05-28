import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../features/product/productApi';
import { brandSchema } from '../../models/product';
import ImageUpload from '../ImageUpload';
import Input from '../Input';

const BrandForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    logo: '',
    brand: '',
  };
  return (
    <Formik
      onSubmit={async (values, actions) => {
        dispatch(createBrand(values));
        actions.resetForm();
      }}
      initialValues={initialValues}
      validationSchema={brandSchema}
    >
      {(formik) => (
        <Form method="post" encType="multipart/form-data">
          <h3 className="fw-normal text-muted mb-3">Add new Brand</h3>
          <div className="mb-3">
            <Input
              formik={formik}
              placeholder="brand Name"
              name="brand"
              type="text"
            />
          </div>
          <div className="mb-3">
            <ImageUpload
              formik={formik}
              name="logo"
              srcBase={`${process.env.REACT_APP_BACKEND}/products/logo`}
              label={'Brand Logo'}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn my-3 btn-danger btn-lg" type="submit">
              Add Product
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BrandForm;
