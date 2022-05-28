import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Input from '../components/Input';
import TagsInput from '../components/TagsInput';
import { getAttribute, updateAttribute } from '../features/product/productApi';
import { attributeSchema } from '../models/product';

const EditeAttribute = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAttribute(id));
  }, [dispatch, id]);

  const { attribute } = useSelector((store) => store.product);

  return (
    <div className="card">
      <div className="card-body">
        {attribute._id && (
          <Formik
            onSubmit={async (values, actions) => {
              console.log(values);
              await dispatch(updateAttribute(values));
              actions.resetForm();
            }}
            initialValues={attribute}
            validationSchema={attributeSchema}
          >
            {(formik) => (
              <Form method="post" encType="multipart/form-data">
                <h3 className="fw-normal text-muted mb-3">Update Attribute</h3>
                <div className="mb-3">
                  <Input
                    formik={formik}
                    placeholder={'Attributes key'}
                    name="key"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <TagsInput
                    formik={formik}
                    placeholder={'Attributes Values seperated by ","'}
                    name="value"
                    type="text"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn my-3 btn-danger btn-lg" type="submit">
                    Update Attribute
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

export default EditeAttribute;
