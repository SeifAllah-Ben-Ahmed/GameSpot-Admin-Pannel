import React from 'react';
import ImagesList from '../components/ImagesList';
import Layout from '../components/Layout';
import PrivateRoute from '../components/PrivateRoute';

const Media = () => {
  return (
    <PrivateRoute>
      <Layout>
        <ImagesList />
      </Layout>
    </PrivateRoute>
  );
};

export default Media;
