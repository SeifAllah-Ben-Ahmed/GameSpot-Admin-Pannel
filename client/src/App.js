import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/Loading';

import { currentUser } from './features/auth/authApi';

const AddUser = lazy(() => import('./view/AddUser'));
const UserList = lazy(() => import('./view/UserList'));
const Category = lazy(() => import('./view/Category'));
const EditeAttribute = lazy(() => import('./view/EditeAttribute'));
const EditeBrand = lazy(() => import('./view/EditeBrand'));
const EditeCategory = lazy(() => import('./view/EditeCategory'));
const Layout = lazy(() => import('./components/Layout'));
const AddProduct = lazy(() => import('./view/AddProduct'));
const Dashbord = lazy(() => import('./view/Dashbord'));
const ProductList = lazy(() => import('./view/ProductList'));
const EditeProduct = lazy(() => import('./view/EditeProduct'));
const Attributes = lazy(() => import('./view/Attributes'));
const Brands = lazy(() => import('./view/Brands'));
const NotImplemented = lazy(() => import('./view/NotImplemented'));
const User = lazy(() => import('./view/User'));
const Login = lazy(() => import('./view/Login'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
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
              <Route index element={<UserList />} />
              <Route path="add" element={<AddUser />} />
              <Route path=":id" element={<User />} />
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
