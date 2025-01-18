import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure you have this file set up

export default function DoctorSignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [aadhaarNo, setAadhaarNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create user in Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      // Save additional user details in Supabase database
      const { error: dbError } = await supabase
        .from("doctors") // Adjust the table name if needed
        .insert({
          firstName,
          lastName,
          email,
          aadhaarNo,
          walletAddress,
        });

      if (dbError) throw dbError;

      alert("Account created successfully!");
      navigate("/doctor/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img src="https://media.istockphoto.com/id/1191123358/vector/herbal-medicine-concept.jpg?s=612x612&w=0&k=20&c=eIze2uz2AQ7AkhQwZTajshpc5od-1cQoFBRTlgCtoww=" alt="health suraksha " className="w-auto h-15 ml-15" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign up to ...
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="aadhaar_no"
              className="block text-sm font-medium text-gray-900"
            >
              Aadhaar No.
            </label>
            <div className="mt-2">
              <input
                id="aadhaar_no"
                name="aadhaar_no"
                type="text"
                pattern="\d{12}"
                required
                value={aadhaarNo}
                onChange={(e) => setAadhaarNo(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="wallet_address"
              className="block text-sm font-medium text-gray-900"
            >
              Wallet Address
            </label>
            <div className="mt-2">
              <input
                id="wallet_address"
                name="wallet_address"
                type="text"
                required
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
          <div className="text-sm text-center">
            <a
              onClick={() => navigate("/doctor/login")}
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Already have an account? Sign In here.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
