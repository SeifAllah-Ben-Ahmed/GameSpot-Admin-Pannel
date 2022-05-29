import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import ImageUpload from '../components/ImageUpload';
import Input from '../components/Input';
import { getBrand, updateBrand } from '../features/product/productApi';
import { brandSchema } from '../models/product';

const EditeBrand = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    return dispatch(getBrand(id));
  }, [dispatch, id]);

  const { brand } = useSelector((store) => store.product);

  return (
    <div className="card">
      <div className="card-body">
        {brand._id && (
          <Formik
            onSubmit={(values, actions) => {
              dispatch(updateBrand(values));
            }}
            initialValues={brand}
            validationSchema={brandSchema}
          >
            {(formik) => (
              <Form method="post" encType="multipart/form-data">
                <h3 className="fw-normal text-muted mb-3">Update Brand</h3>
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
                    srcBase={`/images/products/logo`}
                    name="logo"
                    label={'Brand Logo'}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn my-3 btn-danger btn-lg" type="submit">
                    Update Brand
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default EditeBrand;
