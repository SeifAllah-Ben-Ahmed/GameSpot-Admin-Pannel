import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BrandForm from '../components/BrandForm/BrandForm';
import { deleteBrand, getBrands } from '../features/product/productApi';

const Brands = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBrand(id));
  };

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const { brands } = useSelector((store) => store.product);
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <BrandForm />
          <div className="row">
            <div className="table-responsive">
              <table className="table table-responsive table-borderless">
                <thead>
                  <tr className="bg-light">
                    <th scope="col" width="5%">
                      Id
                    </th>
                    <th scope="col" width="25%">
                      brand Name
                    </th>
                    <th scope="col" width="60%">
                      Brand Logo
                    </th>

                    <th scope="col" className="text-end" width="10%">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {brands?.map((el) => (
                    <tr className="text-start" key={el._id}>
                      <td>
                        <span>{el._id}</span>
                      </td>

                      <td>
                        <span
                          className="d-inline-block text-truncate"
                          style={{ maxWidth: '13.5rem' }}
                        >
                          <strong>{el.brand}</strong>
                        </span>
                      </td>
                      <td>
                        <img
                          width="50"
                          src={`${process.env.REACT_APP_BACKEND}/products/logo/${el.logo}`}
                          alt={el.brand}
                        />
                      </td>

                      <td>
                        <div className="btn-group float-end">
                          <Link
                            className="btn btn-secondary shadow-none"
                            to={`/product/brands/${el._id}`}
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

export default Brands;
