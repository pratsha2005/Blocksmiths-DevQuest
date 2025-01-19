import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import SearchBar from '../components/searchBar';
import PatientCard from './patientCard';
import DescriptionList from './doctorDescriptionList';

function Patients() {
  const [patientsData, setPatientsData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientsData = async () => {
      try {
        setLoading(true);

        const storedId = localStorage.getItem('id');
        if (!storedId) {
          throw new Error('Patient ID not found in local storage.');
        }

        const { data, error: queryError } = await supabase
          .from('requestAccess')
          .select('patientId')
          .eq('doctorId', storedId);

        if (queryError) {
          throw queryError;
        }

        const patientIds = data.map((item) => item.patientId);

        const { data: patientDetails, error: patientError } = await supabase
          .from('patients')
          .select('id, firstName, lastName, email, aadhaarNo, medicalHistory')
          .in('id', patientIds);

        if (patientError) {
          throw patientError;
        }

        setPatientsData(patientDetails || []);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch patient data');
        setLoading(false);
      }
    };

    fetchPatientsData();
  }, []);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient); // Update the selected patient
  };

  const handleBackButtonClick = () => {
    setSelectedPatient(null); // Reset the selected patient
  };

  if (loading) {
    return <div>Loading patients...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {selectedPatient && (
        <>
          <button
            onClick={handleBackButtonClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          >
            Back to Patients
          </button>
          {/* Map through medicalHistory and render a DescriptionList for each record */}
          <div>
            {selectedPatient.medicalHistory.map((record, index) => (
              <DescriptionList
                idx = {index}
                key={index}
                record={record}  // Pass each record individually
                patient={selectedPatient}
              />
            ))}
          </div>
        </>
      )}

      {!selectedPatient && (
        <>
          <SearchBar />
          <PatientCard patients={patientsData} onClick={handlePatientClick} />
        </>
      )}
    </div>
  );
}

export default Patients;
