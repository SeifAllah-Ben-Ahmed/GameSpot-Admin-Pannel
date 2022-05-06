import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const userStore = useSelector((store) => store.user);

  if (userStore.isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
