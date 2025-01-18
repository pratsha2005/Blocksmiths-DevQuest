import React from 'react';

function DoctorCard({ doctors, onClick, onRemoveAccess }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {doctors.map((doctor,index) => (
            <div key={index} className="group relative">
              <img
                alt="Doctor"
                src="https://via.placeholder.com/150" // Placeholder image for doctor
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span>{`Dr. ${doctor.patientInfo.name.firstName} ${doctor.patientInfo.name.lastName}`}</span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Specialization: {doctor.specialization}</p>
                </div>
                <div>
                  {/* Remove Access Button */}
                  <button
                    onClick={() => onRemoveAccess(doctor.doctorId)}
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
