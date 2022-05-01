import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Media from './pages/Media';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            {/* <Route path="login" element={<Login />} /> */}
            <Route index element={<Home />} />
            <Route path="media" element={<Media />} />
            <Route path="users" element={<Home />} />
            <Route path="categories" element={<Home />} />
            <Route path="products" element={<Home />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
