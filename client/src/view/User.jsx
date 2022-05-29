import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getUser } from '../features/user/userApi';

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="card">
      <div className="card-body">
        <div className="row gx-3">
          <div className="col-3">
            <img
              src={`/images/users/${user.photo || 'default.jpg'}`}
              width="100%"
              alt={user.name}
            />
          </div>
          <div className="col-5">
            <h3>{user.name} </h3>
            <small>{user.role}</small>
            <h5>{user.email}</h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
