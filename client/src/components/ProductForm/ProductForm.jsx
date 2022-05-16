import { FieldArray, Form, Formik } from 'formik';
import Input from '../Input';
import RichEditor from '../RichEditor';
import SelectInput from '../SelectInput';
import SwitchInput from '../SwitchInput';
import TagsInput from '../TagsInput';
import { productSchema } from '../../models/product';
import ImageUpload from '../ImageUpload';
import apitext from '../ImageUpload/apitext';

const ProductForm = ({ product }) => {
  const initialValues = {
    name: product?.name || '',
    price: product?.price || '',
    priceDiscount: product?.priceDiscount || '',
    SKU: product?.SKU || '',
    Published: product?.Published || false,
    IsFeatured: product?.IsFeatured || false,
    Tags: product?.Tags || [],
    quantity: product?.quantity || '',
    attributes: product?.attributes || [],
    images: product?.images || [],
    imageCover: product?.imageCover || '',
    description: product?.description || '',
  };
  return (
    <Formik
      onSubmit={async (values, actions) => {
        await apitext({
          ...values,
          attributes: [
            ...new Map(
              values.attributes.map((item) => [item['attributeName'], item])
            ).values(),
          ],
        });
      }}
      initialValues={initialValues}
      validationSchema={productSchema}
    >
      {(formik) => (
        <Form method="post" encType="multipart/form-data">
          <h3 className="fw-normal text-muted float-start mb-3">
            Add new Product
          </h3>
          <div className="float-end">
            <SwitchInput lable="Publish" id="Published" name="Published" />
          </div>
          <div className="mb-3">
            <Input placeholder="Product Name" name="name" type="text" />
            <small className="form-text text-muted">
              product name should be unique
            </small>
          </div>
          <div className="row mb-3">
            <div className="col ">
              <Input placeholder="Product Price" name="price" type="number" />
              <small className="form-text text-muted">Regular Price ($)</small>
            </div>
            <div className="form-group col">
              <Input
                placeholder="Product Price Discount"
                name="priceDiscount"
                type="number"
              />
              <small className="form-text text-muted">Promo Price ($)</small>
            </div>
            <div className="form-group col">
              <Input placeholder="Product SKU" name="SKU" type="number" />
            </div>
            <div className="form-group col">
              <Input
                placeholder="Product quantity"
                name="quantity"
                type="number"
              />
            </div>
          </div>
          <div className="mb-3">
            <RichEditor formik={formik} name="description" />
          </div>
          <div className="mb-3">
            <TagsInput
              formik={formik}
              placeholder={'Tag seperated by ","'}
              name="Tags"
              type="text"
            />
          </div>
          <div className="mb-3">
            <SwitchInput
              lable="Featured Product"
              id="Featured"
              name="IsFeatured"
            />
          </div>
          <div className="mb-3">
            <FieldArray name="attributes">
              {({ push, remove, form }) => {
                return (
                  <>
                    <div className="d-flex align-items-center jutify-content-center mb-3">
                      <h5 className="fw-normal text-muted  me-3">Attributes</h5>
                      <button
                        className="btn btn-secondary "
                        onClick={() =>
                          push({ attributeName: '', attributeValue: '' })
                        }
                      >
                        +
                      </button>
                    </div>
                    {formik.values.attributes.map((_, i) => (
                      <div className="row" key={i}>
                        <div className="row mb-3" key={i}>
                          <SelectInput index={i} form={form} />
                          <div className="col">
                            <button className="btn" onClick={() => remove(i)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                );
              }}
            </FieldArray>
          </div>
          <div className="row mb-3">
            <ImageUpload name="imageCover" formik={formik} />

            <ImageUpload name="images" multiple={true} formik={formik} />
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

export default ProductForm;
