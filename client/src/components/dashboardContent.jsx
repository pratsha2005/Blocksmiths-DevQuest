import React from 'react';
import PageHeading from './pageHeading'
import DescriptionList from './descriptionList';
import patients from './patients';
import RequestAcces from './RequestAccess'

const DashboardContent = () => {
  return (
    <div className="p-6">
      <PageHeading/>
      <DescriptionList/>
    </div>
  );
};

export default DashboardContent;
