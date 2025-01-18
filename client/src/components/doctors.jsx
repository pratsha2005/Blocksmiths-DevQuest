import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import DoctorCard from './doctorCard';
import Chatbot from './chatbot'; // Assuming you have the chatbot component

function Doctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/f6621052-dccd-4638-825a-ada14f5eef75');
        setDoctorsData(response.data.patients);
        setLoading(false);
      } catch {
        setError('Failed to fetch patient data');
        setLoading(false);
      }
    };
    fetchDoctorsData();
  }, []);

  if (loading) return <div>Loading patients...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
          {doctorsData.length > 0 && (
            <DoctorCard doctors={doctorsData} onClick={setSelectedDoctor} />
          )}
    </div>
  );
}

export default Doctors;
