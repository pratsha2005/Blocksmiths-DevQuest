import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Ensure Supabase is correctly configured
import PatientCard from './patientCard';

function Patients() {
  const [patientsData, setPatientsData] = useState([]);  // To store patient data
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track error state

  useEffect(() => {
     const fetchPatientsData = async () => {
       try {
         setLoading(true);
         const storedId = localStorage.getItem('id'); // Get the stored patient ID from local storage
         if (!storedId) {
           throw new Error('Patient ID not found in local storage.');
         }
 
         // Fetch doctor IDs common in `doctors` and `requestAccess` where `patientId = storedId`
         const { data, error: queryError } = await supabase
           .from('requestAccess')
           .select('patientId') 
           .eq('doctorId', storedId);
         console.log(data)
         if (queryError) {
           throw queryError;
         }
 
         const patientIds = data.map(item => item.patientId); // Extract doctorIds
 
         if (patientIds.length > 0) {
           // Fetch doctor details (names) from doctors table based on doctorIds
           const { data: patientDetails, error: doctorError } = await supabase
             .from('patients')
             .select('id, firstName, lastName')
             .in('id', patientIds); // Fetch doctors by IDs
          console.log("patient",data)
           if (doctorError) {
             throw doctorError;
           }
 
           setPatientsData(patientDetails || []);
         }
         setLoading(false);
       } catch (err) {
         console.error('Error fetching doctors:', err.message);
         setError('Failed to fetch doctor data.');
         setLoading(false);
       }
     };
 
     fetchPatientsData();
   }, []);

  if (loading) return <div>Loading patients...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {patientsData.length > 0 ? (
        <PatientCard patients={patientsData} />
      ) : (
        <div>No patients found.</div>
      )}
    </div>
  );
}

export default Patients;
