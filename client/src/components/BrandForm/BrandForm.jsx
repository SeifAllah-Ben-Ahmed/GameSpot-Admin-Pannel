import { Form, Formik } from 'formik';
import React from 'react';
import ImageUpload from '../ImageUpload';
import Input from '../Input';

const BrandForm = () => {
  const initialValues = {
    logo: '',
    brand: '',
  };
  return (
    <Formik
      onSubmit={async (values, actions) => {
        console.log(values);
      }}
      initialValues={initialValues}
      // validationSchema={productSchema}
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
            <ImageUpload formik={formik} name="logo" label={'Brand Logo'} />
          </div>
          <div className="d-grid gap-2">
            <button className="btn my-3 btn-danger btn-lg" type="submit">
              Add Product
            </button>
          </div>
          <pre>
            {JSON.stringify(
              { values: formik.values, errors: formik.errors },
              null,
              4
            )}
          </pre>
        </Form>
      )}
    </Formik>
  );
};

export default BrandForm;
