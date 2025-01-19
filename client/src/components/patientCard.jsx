import React from 'react';
import { Link } from 'react-router-dom';

function PatientCard({ patients, onClick }) { // Receive `onClick` prop
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="group relative cursor-pointer"
              onClick={() => onClick(patient)} // Call the `onClick` handler with the patient object
            >
              <img
                alt="Patient"
                src="https://cdn-icons-png.flaticon.com/512/2786/2786261.png" // Placeholder image
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {`${patient.firstName} ${patient.lastName}`}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Email: {patient.email}</p>
                  <p className="mt-1 text-sm text-gray-500">Aadhaar No: {patient.aadhaarNo}</p>
                  <Link to="/addForm">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-300 font-bold mt-4">
                      Add Data
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
