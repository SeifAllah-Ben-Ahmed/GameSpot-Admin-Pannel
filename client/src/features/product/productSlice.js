import { createSlice } from '@reduxjs/toolkit';
import {
  createAttribute,
  createBrand,
  createCategory,
  createProduct,
  getAttribute,
  getAttributes,
  getBrand,
  getBrands,
  getCategories,
  getCategory,
  getProduct,
  getProducts,
  updateProduct,
} from './productApi';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    status: '',
    isLoading: true,
    products: [],
    product: {},
    attribute: {},
    attributes: [],
    brand: {},
    category: {},
    categories: [],

    error: '',
  },
  extraReducers: {
    /*--------- Get All Products --------- */
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data.products;
      state.status = action.payload.status;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Get Single Product --------- */
    [getProduct.pending]: (state) => {
      state.isLoading = true;
      state.product = {};
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload.data.product;
      state.status = action.payload.status;
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Post NEW Product --------- */
    [createProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload.data.product;
      state.status = action.payload.status;
    },
    [createProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Patch Product --------- */
    [updateProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload.data.product;
      state.status = action.payload.status;
    },
    [updateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Post NEW Attribute --------- */
    [createAttribute.pending]: (state) => {
      state.isLoading = true;
    },
    [createAttribute.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.attribute = action.payload.attribute;
      state.status = action.payload.status;
    },
    [createAttribute.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Get All Attributes --------- */
    [getAttributes.pending]: (state) => {
      state.isLoading = true;
    },
    [getAttributes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.attributes = action.payload.attributes;
      state.status = action.payload.status;
    },
    [getAttributes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Get Single Attribute --------- */
    [getAttribute.pending]: (state) => {
      state.isLoading = true;
      state.attribute = {};
    },
    [getAttribute.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.attribute = action.payload.attribute;
      state.status = action.payload.status;
    },
    [getAttribute.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Post NEW Brand --------- */
    [createBrand.pending]: (state) => {
      state.isLoading = true;
    },
    [createBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brand = action.payload.brand;
      state.status = action.payload.status;
    },
    [createBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },

    /*--------- Get All Brands --------- */
    [getBrands.pending]: (state) => {
      state.isLoading = true;
    },
    [getBrands.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brands = action.payload.brands;
      state.status = action.payload.status;
    },
    [getBrands.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Get Single Brand --------- */
    [getBrand.pending]: (state) => {
      state.isLoading = true;
      state.brand = {};
    },
    [getBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brand = action.payload.brand;
      state.status = action.payload.status;
    },
    [getBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Post NEW Category --------- */
    [createCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.category = action.payload.category;
      state.status = action.payload.status;
    },
    [createCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },

    /*--------- Get All Categories --------- */
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.categories;
      state.status = action.payload.status;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    /*--------- Get Single Category --------- */
    [getCategory.pending]: (state) => {
      state.isLoading = true;
      state.category = {};
    },
    [getCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.category = action.payload.category;
      state.status = action.payload.status;
    },
    [getBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
  },
});

export default productSlice.reducer;
