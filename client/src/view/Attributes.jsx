import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AttributeForm from '../components/AttributeForm/AttributeForm';
import { deleteAttribute, getAttributes } from '../features/product/productApi';

const Attributes = () => {
  const dispatch = useDispatch();
  const { attributes } = useSelector((store) => store.product);

  const handleDelete = (id) => {
    dispatch(deleteAttribute(id));
  };

  useEffect(() => {
    dispatch(getAttributes());
  }, [dispatch]);

  return (
    <main>
      <div className="card">
        <div className="card-body">
          <AttributeForm />
          <div className="row">
            <div className="table-responsive">
              <table className="table table-responsive table-borderless">
                <thead>
                  <tr className="bg-light">
                    <th scope="col" width="5%">
                      Id
                    </th>
                    <th scope="col" width="25%">
                      Attributes key
                    </th>
                    <th scope="col" width="60%">
                      Attributes Values
                    </th>

                    <th scope="col" className="text-end" width="10%">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attributes &&
                    attributes.map((el) => (
                      <tr className="text-start" key={el._id}>
                        <td>
                          <span
                            className="d-inline-block text-truncate "
                            style={{ width: '5rem' }}
                          >
                            {el._id}
                          </span>
                        </td>

                        <td>
                          <span
                            className="d-inline-block text-truncate "
                            style={{ maxWidth: '13.5rem' }}
                          >
                            {el.key}
                          </span>
                        </td>
                        <td>
                          {el.value.map((item, i) => (
                            <span className="badge bg-danger m-1" key={i}>
                              {item}
                            </span>
                          ))}
                        </td>

                        <td>
                          <div className="btn-group float-end">
                            <Link
                              className="btn btn-secondary shadow-none"
                              to={`/product/attributes/${el._id}`}
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(el._id)}
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
        </div>
      </div>
    </main>
  );
};

export default Attributes;
