import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import AddProduct from './view/AddProduct';
import Dashbord from './view/Dashbord';
import ProductList from './view/ProductList';
import EditeProduct from './view/EditeProduct';
import Attributes from './view/Attributes';
import Brands from './view/Brands';
import NotImplemented from './view/NotImplemented';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/product">
            <Route index element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":id" element={<EditeProduct />} />
            <Route path="attributes" element={<Attributes />} />
            <Route path="brands" element={<Brands />} />
            <Route path="categories" element={<NotImplemented />} />
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
    </BrowserRouter>
  );
}

export default App;
