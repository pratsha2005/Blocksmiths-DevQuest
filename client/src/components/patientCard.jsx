import React from 'react';

function PatientCard({ patients, onClick }) {
  console.log('Patients data:', patients); 

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {patients.map((patient) => (
            <div
              onClick={() => onClick(patient)}  // Pass the clicked patient data
              key={patient.patientId}
              className="group relative cursor-pointer"
            >
              <img
                alt="Patient"
                src="https://via.placeholder.com/150"  // Placeholder image for patient
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span>{`${patient.patientInfo.name.firstName} ${patient.patientInfo.name.lastName}`}</span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">DOB: {patient.dob}</p>
                  <p className="mt-1 text-sm text-gray-500">Gender: {patient.gender}</p>
                  <p className="mt-1 text-sm text-gray-500">Email: {patient.contact.email}</p>
                  <p className="mt-1 text-sm text-gray-500">Phone: {patient.contact.phone}</p>
                  <p className="mt-1 text-sm text-gray-500">Address: {patient.contact.address.street}, {patient.contact.address.city}, {patient.contact.address.state}, {patient.contact.address.zip}</p>
                  <p className="mt-1 text-sm text-gray-500">Emergency Contact: {patient.emergencyContact.name} ({patient.emergencyContact.relationship})</p>
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
