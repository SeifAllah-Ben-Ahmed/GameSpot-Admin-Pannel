import React from 'react';

const Loading = ({ btn, height }) => {
  if (btn) {
    return <span className="spinner-border text-light" role="status"></span>;
  }
  return (
    <div
      className={`${
        height ? height : 'vh-100'
      } w-100 d-flex justify-content-center align-items-center`}
    >
      <span className="spinner-grow text-danger" role="status"></span>
    </div>
  );
};

export default Loading;
