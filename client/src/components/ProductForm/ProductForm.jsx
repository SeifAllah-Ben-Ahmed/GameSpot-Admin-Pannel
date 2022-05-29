import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FieldArray, Form, Formik } from 'formik';
import Input from '../Input';
import RichEditor from '../RichEditor';
import SelectInput, { SelectBrandInput } from '../SelectInput';
import SwitchInput from '../SwitchInput';
import TagsInput from '../TagsInput';
import { productSchema } from '../../models/product';
import ImageUpload from '../ImageUpload';
import {
  createProduct,
  updateProduct,
} from '../../features/product/productApi';

import CategoryAndSubSelect from '../CategorySelect/CategoryAndSubSelect';

const ProductForm = ({ product }) => {
  const initialValues = {
    name: '',
    price: '',
    priceDiscount: '',
    SKU: '',
    published: false,
    IsFeatured: false,
    Tags: [],
    quantity: '',
    attributes: [],
    images: [],
    imageCover: '',
    description: '',
    brand: '',
    category: '',
  };

  const dispatch = useDispatch();
  const { slug } = useParams();

  return (
    <Formik
      onSubmit={(values, actions) => {
        slug
          ? dispatch(updateProduct(values))
          : dispatch(createProduct(values));
      }}
      initialValues={
        slug
          ? {
              ...product,
              brand: product.brand._id,
              category: product.category._id,
              subCategory: product.subCategory._id,
            }
          : initialValues
      }
      validationSchema={productSchema}
    >
      {(formik) => (
        <Form method="post" encType="multipart/form-data">
          <h3 className="fw-normal text-muted  mb-3">
            {slug ? 'Update Product' : 'Add new Product'}
          </h3>

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
            <FieldArray name="attributes">
              {({ push, remove, form }) => {
                return (
                  <>
                    <div className="d-flex align-items-center jutify-content-center mb-3">
                      <h5 className="fw-normal text-muted  me-3">Attributes</h5>
                      <button
                        type="button"
                        className="btn btn-secondary "
                        onClick={() =>
                          push({ attributeName: '', attributeValue: '' })
                        }
                      >
                        +
                      </button>
                    </div>
                    {formik.values.attributes?.map((_, i) => (
                      <div className="row" key={i}>
                        <div className="row mb-3" key={i}>
                          <SelectInput index={i} form={form} />
                          <div className="col">
                            <button
                              className="btn"
                              type="button"
                              onClick={() => remove(i)}
                            >
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
            <div className="col">
              <SelectBrandInput form={formik} />
            </div>
          </div>
          <div className="row mb-3">
            <ImageUpload
              srcBase={`/images/products`}
              name="imageCover"
              formik={formik}
              label="Principal Image"
            />

            <ImageUpload
              srcBase={`/images/products`}
              name="images"
              multiple={true}
              formik={formik}
              label="Secondary Images"
            />
          </div>
          <div className="row mb-3">
            <CategoryAndSubSelect form={formik} />
          </div>
          <div className="mb-3">
            <SwitchInput
              lable="Featured Product"
              id="Featured"
              name="IsFeatured"
            />
          </div>
          <div className="mb-3">
            <SwitchInput lable="Publish" id="published" name="published" />
          </div>
          <div className="d-grid gap-2">
            <button className="btn my-3 btn-danger btn-lg" type="submit">
              {slug ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
