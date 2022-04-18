import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { userColumns, userRows } from '../../data';
import './dataTable.scss';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  const { pathname } = useLocation();

  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add New {pathname.substring(1)}
        <Link
          to={`${pathname}/new`}
          style={{ textDecoration: 'none' }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        // onSelectionModelChange={(userId) => console.log(userId)}
      />
    </div>
  );
};

export default DataTable;
