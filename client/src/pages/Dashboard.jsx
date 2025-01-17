import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar';
import DashboardContent from '../components/dashboardContent';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
