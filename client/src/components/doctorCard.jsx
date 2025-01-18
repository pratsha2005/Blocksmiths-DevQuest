import React, { useState } from 'react';

function DoctorCard({ doctors, onRemoveAccess, error }) {
  const [loading, setLoading] = useState(false);  // Set initial loading state

  // If loading or an error occurs, show appropriate message
  if (loading) return <div>Loading doctors...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="group relative">
              <img
                alt="Doctor"
                src="https://thumbs.dreamstime.com/b/male-doctor-nurse-ners-avatar-clipart-icon-logo-animated-cartoon-vector-flat-design-men-occupation-paramedic-illustration-269804308.jpg" // Placeholder image for doctor
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span>{`Dr. ${doctor.firstName} ${doctor.lastName}`}</span>
                  </h3>
                </div>
                <div>
                  <button
                    onClick={() => onRemoveAccess(doctor.id)} // Corrected to use doctor.id
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove Access
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
