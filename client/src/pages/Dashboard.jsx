// Dashboard component
import React,{useState} from "react";
import Sidebar from '../components/sidebar'
import Navbar from "../components/Navbar";
import DashboardContent from '../components/dashboardContent'
const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('patients'); // Default to 'patients'

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={handleOptionSelect} />
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
