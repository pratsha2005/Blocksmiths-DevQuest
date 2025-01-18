import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Sign In As
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Patient Box */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg border transition cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl"
            onClick={() => navigate('/patient/login')}
          >
            <h2 className="text-xl font-semibold">Patient</h2>
            <p className="mt-2">
              Access your medical records and appointments.
            </p>
          </div>
          {/* Doctor Box */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg border transition cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl"
            onClick={() => navigate('/doctor/login')}
          >
            <h2 className="text-xl font-semibold">Doctor</h2>
            <p className="mt-2">
              Manage your patients and schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOptions;
