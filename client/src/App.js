import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { currentUser } from './features/auth/authApi';

const Category = lazy(() => import('./components/Category'));
const EditeAttribute = lazy(() => import('./components/EditeAttribute'));
const EditeBrand = lazy(() => import('./components/EditeBrand'));
const EditeCategory = lazy(() => import('./components/EditeCategory'));
const Layout = lazy(() => import('./components/Layout'));
const AddProduct = lazy(() => import('./view/AddProduct'));
const Dashbord = lazy(() => import('./view/Dashbord'));
const ProductList = lazy(() => import('./view/ProductList'));
const EditeProduct = lazy(() => import('./view/EditeProduct'));
const Attributes = lazy(() => import('./view/Attributes'));
const Brands = lazy(() => import('./view/Brands'));
const NotImplemented = lazy(() => import('./view/NotImplemented'));
const Login = lazy(() => import('./view/Login'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Suspense
        fallback={
          <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
            <span className="spinner-grow text-danger" role="status"></span>
          </div>
        }
      >
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Dashbord />} />
            <Route path="/product">
              <Route index element={<ProductList />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":slug" element={<EditeProduct />} />
              <Route path="attributes">
                <Route index element={<Attributes />} />
                <Route path=":id" element={<EditeAttribute />} />
              </Route>
              <Route path="brands">
                <Route index element={<Brands />} />
                <Route path=":id" element={<EditeBrand />} />
              </Route>
              <Route path="categories">
                <Route index element={<Category />} />
                <Route path=":id" element={<EditeCategory />} />
              </Route>
            </Route>
            <Route path="/user">
              <Route index element={<NotImplemented />} />
              <Route path="add" element={<NotImplemented />} />
            </Route>
            <Route path="/order">
              <Route index element={<NotImplemented />} />
              <Route path="add" element={<NotImplemented />} />
            </Route>
            <Route path="/stats">
              <Route path="product" element={<NotImplemented />} />
              <Route path="user" element={<NotImplemented />} />
              <Route path="order" element={<NotImplemented />} />
            </Route>
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
