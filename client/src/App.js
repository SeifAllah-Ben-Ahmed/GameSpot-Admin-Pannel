import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import AddProduct from './view/AddProduct';
import Dashbord from './view/Dashbord';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Product/add" element={<AddProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
