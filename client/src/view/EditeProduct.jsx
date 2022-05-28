import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../features/product/productApi';
const ProductForm = lazy(() => import('../components/ProductForm'));
// import ProductForm from '../components/ProductForm';

const AddProduct = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((store) => store.product);

  useEffect(() => {
    return dispatch(getProduct(slug));
  }, [dispatch, slug]);

  return (
    <main className="card">
      <div className="card-body">
        <Suspense
          fallback={
            <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
              <span className="spinner-grow text-danger" role="status"></span>
            </div>
          }
        >
          {product.slug && <ProductForm product={product} />}
        </Suspense>
      </div>
    </main>
  );
};

export default AddProduct;
