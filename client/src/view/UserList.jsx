import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../features/user/userApi';

const UserList = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const { users } = useSelector((store) => store.user);

  return (
    <main className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive table-borderless">
            <thead className="text-center">
              <tr className="bg-light">
                <th scope="col" width="5%">
                  ID
                </th>
                <th scope="col" width="25%">
                  Name
                </th>
                <th scope="col" width="10%">
                  E-mail
                </th>
                <th scope="col" className="text-center" width="20%">
                  Role
                </th>

                <th scope="col" className="text-end" width="20%">
                  <span>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <tr className="text-center" key={item._id}>
                    <td>
                      <span
                        className="d-inline-block text-truncate "
                        style={{ width: '5rem' }}
                      >
                        {item._id}
                      </span>
                    </td>

                    <td className="text-start">
                      <img
                        src={`/images/users/${item.photo || 'default.jpg'}`}
                        width="50"
                        alt={item.name}
                        className="me-2"
                      />
                      <span>{item.name}</span>
                    </td>

                    <td>{item.email}</td>
                    <td className="text-center fw-bolder"> {item.role}</td>
                    <td>
                      <div className="btn-group float-end">
                        <Link
                          className="btn btn-secondary shadow-none"
                          to={`/user/${item._id}`}
                        >
                          more details
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-outline-secondary shadow-none"
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default React.memo(UserList);
