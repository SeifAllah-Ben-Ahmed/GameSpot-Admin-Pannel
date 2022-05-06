import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import Media from './pages/Media';
import { currentUser } from './redux/reducers/apiCalls';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    currentUser(dispatch);
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="media" element={<Media />} />
          <Route path="users" element={<Home />} />
          <Route path="product" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="new" element={<Home />} />
            <Route path="categories" element={<Home />} />
            <Route path="brands" element={<Home />} />
            <Route path="variants" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
