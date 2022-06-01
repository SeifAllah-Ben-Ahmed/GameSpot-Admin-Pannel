import React from 'react';
import Loading from '../Loading';

const Widget = ({ data, title, range }) => {
  if (!data) {
    return <Loading height="h-100" />;
  }
  return (
    <div className=" col-lg-4 ">
      <div className="card widget-flat h-100">
        <div className="card-body ">
          {/* <div className="float-end">Icon</div> */}
          <h5 className="text-muted fw-normal mt-0"> {title}</h5>
          <h3 className="mt-3 mb-3"> {data}</h3>
          <p className="mb-0 text-muted">
            {/* <span className="text-success me-2"> 50%</span> */}
            {range && <span className="text-nowrap">Since last {range}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
