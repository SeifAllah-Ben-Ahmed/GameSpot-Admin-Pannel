import { createAsyncThunk } from '@reduxjs/toolkit';
import { rejectedMessage, resolvedMessage } from '../../utils/apiMessage';
import instance from '../instance';

/*---------------  PRODUCT ---------------*/

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get('/api/products');

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (slug, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/products/${slug}`);
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (product, thunkAPI) => {
    const formData = new FormData();

    for (let i = 0; i < product.images.length; i++) {
      formData.append('images', product.images[i]);
    }
    for (let i = 0; i < product.Tags.length; i++) {
      formData.append('Tags', product.Tags[i]);
    }
    product.attributes = [
      ...new Map(
        product.attributes.map((item) => [item['attributeName'], item])
      ).values(),
    ];
    for (let i = 0; i < product.attributes.length; i++) {
      formData.append(
        `attributes[${i}][attributeName]`,
        product.attributes[i].attributeName
      );
      formData.append(
        `attributes[${i}][attributeValue]`,
        product.attributes[i].attributeValue
      );
    }

    formData.append('category', product.category);
    formData.append('subCategory', product.subCategory);
    formData.append('description', product.description);
    formData.append('brand', product.brand);
    formData.append('imageCover', product.imageCover);
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('priceDiscount', product.priceDiscount);
    formData.append('SKU', product.SKU);
    formData.append('published', product.published);
    formData.append('IsFeatured', product.IsFeatured);
    formData.append('quantity', product.quantity);
    try {
      const resp = await instance.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      resolvedMessage('Product was successfully created');
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (product, thunkAPI) => {
    const formData = new FormData();

    for (let i = 0; i < product.images.length; i++) {
      formData.append('images', product.images[i]);
    }
    for (let i = 0; i < product.Tags.length; i++) {
      formData.append('Tags', product.Tags[i]);
    }
    product.attributes = [
      ...new Map(
        product.attributes.map((item) => [item['attributeName'], item])
      ).values(),
    ];
    for (let i = 0; i < product.attributes.length; i++) {
      formData.append(
        `attributes[${i}][attributeName]`,
        product.attributes[i].attributeName
      );
      formData.append(
        `attributes[${i}][attributeValue]`,
        product.attributes[i].attributeValue
      );
    }
    formData.append('category', product.category);
    formData.append('subCategory', product.subCategory);
    formData.append('description', product.description);
    formData.append('brand', product.brand);
    formData.append('imageCover', product.imageCover);
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('priceDiscount', product.priceDiscount);
    formData.append('SKU', product.SKU);
    formData.append('published', product.published);
    formData.append('IsFeatured', product.IsFeatured);
    formData.append('quantity', product.quantity);
    try {
      const resp = await instance.patch(
        `/api/products/${product.slug}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      resolvedMessage('Product was successfully updated');
      thunkAPI.dispatch(getProduct(product.slug));
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (slug, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/products/${slug}`);
      resolvedMessage('Product was successfully deleted');
      thunkAPI.dispatch(getProducts());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;

      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

/*---------------  ATTRIBUTES ---------------*/

export const createAttribute = createAsyncThunk(
  'product/createAttribute',
  async (attribute, thunkAPI) => {
    try {
      const resp = await instance.post('/api/attributes', attribute);
      resolvedMessage('Attribute was successfully created');
      thunkAPI.dispatch(getAttributes());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getAttributes = createAsyncThunk(
  'product/getAttributes',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get('/api/attributes');

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getAttribute = createAsyncThunk(
  'product/getAttribute',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/attributes/${id}`);

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const deleteAttribute = createAsyncThunk(
  'product/deleteAttribute',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/attributes/${id}`);
      resolvedMessage('Attribute was successfully deleted');
      thunkAPI.dispatch(getAttributes());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const updateAttribute = createAsyncThunk(
  'product/updateAttribute',
  async (attribute, thunkAPI) => {
    try {
      const resp = await instance.patch(
        `/api/attributes/${attribute._id}`,
        attribute
      );
      resolvedMessage('Attribute was successfully update');
      thunkAPI.dispatch(getAttribute(attribute._id));
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
/*---------------  BRAND ---------------*/

export const createBrand = createAsyncThunk(
  'product/createBrand',
  async (brand, thunkAPI) => {
    const formData = new FormData();

    formData.append('brand', brand.brand);
    formData.append('logo', brand.logo);

    try {
      const resp = await instance.post('/api/products/brand', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      resolvedMessage('Brand was successfully created');
      thunkAPI.dispatch(getBrands());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getBrand = createAsyncThunk(
  'product/getBrand',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/products/brand/${id}`);

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getBrands = createAsyncThunk(
  'product/getBrands',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/products/brand/`);

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const updateBrand = createAsyncThunk(
  'product/updateBrand',
  async (brand, thunkAPI) => {
    const formData = new FormData();

    formData.append('brand', brand.brand);
    formData.append('logo', brand.logo);

    try {
      const resp = await instance.patch(
        `/api/products/brand/${brand._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      resolvedMessage('Brand was successfully updated');

      thunkAPI.dispatch(getBrand(brand._id));
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const deleteBrand = createAsyncThunk(
  'product/deleteBrand',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/products/brand/${id}`);
      resolvedMessage('Brand was successfully deleted');
      thunkAPI.dispatch(getBrands());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
/*---------------  CATEGORY ---------------*/

export const createCategory = createAsyncThunk(
  'product/createCategory',
  async (category, thunkAPI) => {
    try {
      const resp = await instance.post('/api/products/category', category);
      resolvedMessage('Category was successfully created');
      thunkAPI.dispatch(getCategories());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getCategory = createAsyncThunk(
  'product/getCategory',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/products/category/${id}`);

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getCategories = createAsyncThunk(
  'product/getCategories',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/products/category/`);

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const updateCategory = createAsyncThunk(
  'product/updateCategory',
  async (category, thunkAPI) => {
    try {
      const resp = await instance.patch(
        `/api/products/category/${category._id}`,
        category
      );
      resolvedMessage('Category was successfully updated');

      thunkAPI.dispatch(getCategory(category._id));
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'product/deleteCategory',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/products/category/${id}`);
      resolvedMessage('Category was successfully deleted');
      thunkAPI.dispatch(getCategories());
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
