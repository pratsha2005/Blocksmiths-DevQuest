import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Importing axios for API calls
import SearchBar from './searchBar';
import PatientCard from './patientCard';
import { PatientRecords } from './patientRecords';
import DescriptionList from './doctorDescriptionList';
import Chatbot from './chatbot';  // Assuming you have the chatbot component

function Patients() {
  const [patientsData, setPatientsData] = useState([]);  // To store patient data
  const [selectedPatient, setSelectedPatient] = useState(null);  // To store selected patient
  const [selectedRecord, setSelectedRecord] = useState(null);  // To store selected record
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track error state

  useEffect(() => {
    const fetchPatientsData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/f6621052-dccd-4638-825a-ada14f5eef75');  // Replace with actual API URL
        setPatientsData(response.data.patients);  // Assuming the data is in a "patients" array
        setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        setError('Failed to fetch patient data');
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchPatientsData();
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  // Handle patient card click
  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setSelectedRecord(null);  // Reset selected record when a new patient is selected
  };

  // Handle record click
  const handleRecordClick = (record) => {
    setSelectedRecord(record);  // Update selected record
  };

  // Handle Back Button click to render PatientCard again
  const handleBackButtonClick = () => {
    setSelectedPatient(null);  // Reset selected patient to show the PatientCard again
    setSelectedRecord(null);  // Reset selected record
  };

  if (loading) {
    return <div>Loading patients...</div>;  // Show loading text while data is being fetched
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if something goes wrong
  }

  return (
    <div>
      {/* Back Button - only visible when a patient is selected */}
      {selectedPatient && (
        <button
          onClick={handleBackButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Back to Patients
        </button>
      )}

      {/* Conditionally render SearchBar if no patient is selected */}
      {!selectedPatient && <SearchBar />}

      {/* Only render PatientCard if no patient is selected and patientsData is available */}
      {!selectedPatient && patientsData.length > 0 && (
        <PatientCard patients={patientsData} onClick={handlePatientClick} />
      )}
      
      {/* Render PatientRecords if a patient is selected */}
      {selectedPatient && !selectedRecord && (
        <PatientRecords
          medicalHistory={selectedPatient.medicalHistory}
          onRecordClick={handleRecordClick}  // Pass the handleRecordClick function to PatientRecords
        />
      )}
      
      {/* Render DescriptionList if a record is selected */}
      {selectedRecord && <DescriptionList record={selectedRecord} patient={selectedPatient} />}

      {/* Render Chatbot only when PatientRecords is shown */}
      {selectedPatient && !selectedRecord && <Chatbot />}
    </div>
  );
}

export default Patients;
