import React from 'react';
import PageHeading from './pageHeading'
import DescriptionList from './descriptionList';

const DashboardContent = () => {
  return (
    <div className="p-6">
      <PageHeading/>
      <DescriptionList/>
    </div>
  );
};

export default DashboardContent;
