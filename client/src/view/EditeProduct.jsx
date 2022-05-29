import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
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
        <Suspense fallback={<Loading />}>
          {product.slug && <ProductForm product={product} />}
        </Suspense>
      </div>
    </main>
  );
};

export default AddProduct;
