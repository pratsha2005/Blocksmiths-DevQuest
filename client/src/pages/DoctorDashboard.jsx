// Dashboard component
import React,{useState} from "react";
import DoctorSidebar from '../components/doctorSidebar'
import Navbar from "../components/Navbar";
import DoctorDashboardContent from '../components/doctorDashboardContent'
const DoctorDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('patients'); // Default to 'patients'

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      <DoctorSidebar onSelect={handleOptionSelect} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <DoctorDashboardContent selectedOption={selectedOption} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
