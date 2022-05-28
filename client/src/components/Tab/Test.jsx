import React from 'react';
import RowItem from './RowItem';

const Test = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-responsive table-borderless">
        <thead className="text-center">
          <tr className="bg-light">
            <th scope="col" width="5%">
              SKU
            </th>
            <th scope="col" width="20%">
              Name
            </th>
            <th scope="col" width="10%">
              Status
            </th>
            <th scope="col" className="text-end" width="20%">
              Price
            </th>
            <th scope="col" className="text-end" width="20%">
              Price Discount
            </th>
            <th scope="col" className="text-end" width="20%">
              quantity
            </th>
            <th scope="col" className="text-end" width="20%">
              <span>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <RowItem item={item} key={item.SKU} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
