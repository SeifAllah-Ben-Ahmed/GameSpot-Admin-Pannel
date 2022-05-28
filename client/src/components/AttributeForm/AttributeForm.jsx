import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createAttribute } from '../../features/product/productApi';
import { attributeSchema } from '../../models/product';
import Input from '../Input';
import TagsInput from '../TagsInput';

const AttributeForm = () => {
  const initialValues = {
    key: '',
    value: [],
  };
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        onSubmit={(values, actions) => {
          dispatch(createAttribute(values));
          actions.resetForm();
        }}
        initialValues={initialValues}
        validationSchema={attributeSchema}
      >
        {(formik) => (
          <Form method="post" encType="multipart/form-data">
            <h3 className="fw-normal text-muted mb-3">Add new Attributes</h3>
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
                Add Attribute
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AttributeForm;
