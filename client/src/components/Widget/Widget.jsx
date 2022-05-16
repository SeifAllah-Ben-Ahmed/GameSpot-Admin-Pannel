import React from 'react';

const Widget = () => {
  return (
    <div className=" col-lg-4">
      <div className="card widget-flat">
        <div className="card-body">
          <div className="float-end">Icon</div>
          <h5 className="text-muted fw-normal mt-0"> Widgets</h5>
          <h3 className="mt-3 mb-3"> 500$</h3>
          <p className="mb-0 text-muted">
            <span className="text-success me-2"> 50%</span>
            <span className="text-nowrap">Since last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
