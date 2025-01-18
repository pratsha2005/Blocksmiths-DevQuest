import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Home'); // Default option

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onOptionSelect={handleOptionSelect} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <DashboardContent selectedOption={selectedOption} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
