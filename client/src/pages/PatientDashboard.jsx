// Dashboard component
import React,{useState} from "react";
import PatientSidebar from '../components/patientSidebar'
import Navbar from "../components/Navbar";
import PatientDashboardContent from '../components/patientDashboardContent'
const PatientDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('doctors'); // Default to 'patients'

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      <PatientSidebar onSelect={handleOptionSelect} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <PatientDashboardContent selectedOption={selectedOption} />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
