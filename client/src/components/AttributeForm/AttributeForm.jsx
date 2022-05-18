import { Form, Formik } from 'formik';
import Input from '../Input';
import TagsInput from '../TagsInput';

const AttributeForm = () => {
  const initialValues = {
    key: '',
    values: [],
  };
  return (
    <div>
      <Formik
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
        initialValues={initialValues}
        // validationSchema={productSchema}
      >
        {(formik) => (
          <Form method="post" encType="multipart/form-data">
            <h3 className="fw-normal text-muted mb-3">Add new Attributes</h3>
            <div className="mb-3">
              <Input
                formik={formik}
                placeholder={'Attributes Key'}
                name="key"
                type="text"
              />
            </div>
            <div className="mb-3">
              <TagsInput
                formik={formik}
                placeholder={'Attributes Values'}
                name="values"
                type="text"
              />
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
    </div>
  );
};

export default AttributeForm;
