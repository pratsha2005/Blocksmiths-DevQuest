import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Ensure your Supabase client is correctly configured
import DoctorCard from './doctorCard';

function Doctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        setLoading(true);
        const storedId = localStorage.getItem('id'); // Get the stored patient ID from local storage
        if (!storedId) {
          throw new Error('Patient ID not found in local storage.');
        }

        // Fetch doctor IDs common in `doctors` and `requestAccess` where `patientId = storedId`
        const { data, error: queryError } = await supabase
          .from('requestAccess')
          .select('doctorId') 
          .eq('patientId', storedId);

        if (queryError) {
          throw queryError;
        }

        const doctorIds = data.map(item => item.doctorId); // Extract doctorIds

        if (doctorIds.length > 0) {
          // Fetch doctor details (names) from doctors table based on doctorIds
          const { data: doctorDetails, error: doctorError } = await supabase
            .from('doctors')
            .select('id, firstName, lastName')
            .in('id', doctorIds); // Fetch doctors by IDs

          if (doctorError) {
            throw doctorError;
          }

          setDoctorsData(doctorDetails || []);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching doctors:', err.message);
        setError('Failed to fetch doctor data.');
        setLoading(false);
      }
    };

    fetchDoctorsData();
  }, []);

  if (loading) return <div>Loading doctors...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {doctorsData.length > 0 ? (
        <DoctorCard doctors={doctorsData}/>
      ) : (
        <div>No doctors found.</div>
      )}
    </div>
  );
}

export default Doctors;
