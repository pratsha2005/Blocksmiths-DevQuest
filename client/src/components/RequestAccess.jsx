import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { supabase } from '../supabaseClient'; // Ensure you have the Supabase client configured

function RequestAccess() {
  const [searchQuery, setSearchQuery] = useState(''); // Tracks the search query
  const [userData, setUserData] = useState(null); // Stores user data returned from the search
  const [id, setId] = useState(null); // Tracks the logged-in user's ID

  // Retrieve stored user ID from localStorage
  useEffect(() => {
    const storedId = localStorage.getItem('id'); // Get the ID from localStorage
    if (storedId) {
      setId(storedId); // Set the user ID state
    }
    console.log('Stored ID:', storedId);
  }, []);

  const handleRequestAccess = async () => {
    if (!userData || !id) {
      alert('Missing user data or user ID.');
      return;
    }

    try {
      console.log('User Data:', userData[0].id);
      console.log('Logged-in ID:', id);

      // Insert the notification into the database (assuming you have a "notifications" table)
      const { data, error } = await supabase
        .from('notifications')
        .insert([
          {
            patientId: userData[0].id,
            doctorId: id, // Use the logged-in user's ID from state
          },
        ]);

      if (error) throw error;

      alert('Access request sent successfully!');
      console.log('Inserted Data:', data);
    } catch (err) {
      console.error('Error sending request:', err.message);
      alert('There was an error while sending the access request.');
    }
  };

  return (
    <div>
      <SearchBar
        title="Search by Aadhaar"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setUserData={setUserData} // Pass the function to update user data
      />

      {/* Display the user data if available */}
      {userData && userData.length > 0 && (
        <div className="max-w-sm mx-auto mt-5 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">
            {userData[0].firstName} {userData[0].lastName}
          </h2>
          <p>{userData[0].aadhaarNo}</p>
          <div className="mt-4">
            <button
              onClick={handleRequestAccess}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestAccess;
