import React from 'react';
import AttributeForm from '../components/AttributeForm/AttributeForm';
import Tab from '../components/Tab';

const Attributes = () => {
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <AttributeForm />
          <div className="row">
            <Tab />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Attributes;
