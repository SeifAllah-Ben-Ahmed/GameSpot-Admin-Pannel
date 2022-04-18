import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import Home from './pages/home';
import Login from './pages/login';
import Single from './pages/single';
import New from './pages/new';
import List from './pages/list';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeReducer';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
