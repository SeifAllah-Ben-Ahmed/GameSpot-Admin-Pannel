import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryForm from '../components/CategoryForm';
import Loading from '../components/Loading';
import { deleteCategory, getCategories } from '../features/product/productApi';

const Category = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };
  const { categories, isLoading } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <CategoryForm />
          <div className="row">
            <div className="table-responsive">
              <table className="table table-responsive table-borderless">
                <thead>
                  <tr className="bg-light">
                    <th scope="col" width="5%">
                      Id
                    </th>
                    <th scope="col" width="25%">
                      Category Name
                    </th>
                    <th scope="col" width="60%">
                      Category Parent
                    </th>

                    <th scope="col" className="text-end" width="10%">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((el) => (
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
                            {el.name}
                          </span>
                        </td>
                        <td>{el.parent?._id && el.parent.name}</td>

                        <td>
                          <div className="btn-group float-end">
                            <Link
                              className="btn btn-secondary shadow-none"
                              to={`/product/categories/${el._id}`}
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

export default React.memo(Category);
