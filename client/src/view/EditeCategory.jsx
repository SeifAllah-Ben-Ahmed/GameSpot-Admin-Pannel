import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategorySelect from '../components/CategorySelect';
import Input from '../components/Input';
import { getCategory, updateCategory } from '../features/product/productApi';
import { categorySchema } from '../models/product';

const EditeCategory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategory(id));
  }, [dispatch, id]);

  const { category } = useSelector((store) => store.product);

  return (
    <div className="card">
      <div className="card-body">
        {category._id && (
          <Formik
            onSubmit={(values, actions) => {
              dispatch(updateCategory(values));
            }}
            initialValues={category}
            validationSchema={categorySchema}
          >
            {(formik) => (
              <Form method="post" encType="multipart/form-data">
                <h3 className="fw-normal text-muted mb-3">Update Category</h3>
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
                    label="Category parent"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn my-3 btn-danger btn-lg" type="submit">
                    Update Category
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

export default EditeCategory;
