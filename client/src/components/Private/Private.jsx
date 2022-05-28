import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
  const { isAuth, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return (
      <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <span className="spinner-grow text-danger" role="status"></span>
      </div>
    );
  }

  return (
    <>
      {!isLoading && isAuth && children}
      {!isLoading && !isAuth && <Navigate to="/login" replace={true} />}
    </>
  );
};

export default Private;
