import React, { useState } from 'react';
import { supabase } from "../supabaseClient";

function SearchBar({ title, searchQuery, setSearchQuery, setUserData }) {
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Pass the updated query to the parent
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    setLoading(true);
    try {
      // Query Supabase for the user with the matching Aadhaar number
      const { data, error } = await supabase
        .from('patients') // Replace 'patients' with your actual table name
        .select('id,firstName,lastName,aadhaarNo')
        .eq('aadhaarNo', searchQuery); // Replace 'aadhaarNo' with the actual column name for Aadhaar number

      if (error) throw error;
      
      setUserData(data); // Pass the fetched user data to the parent component
    } catch (error) {
      console.error('Error fetching user:', error);
      setUserData(null); // Reset the user data on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto pb-5">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {title}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={title} // Use title as placeholder
            value={searchQuery} // Controlled input
            onChange={handleSearchChange} // Update state when the input changes
            required
          />
          <button
            onClick={handleSearchSubmit}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {/* Show loading message if data is being fetched */}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default SearchBar;
