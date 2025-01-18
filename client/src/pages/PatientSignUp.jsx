import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
export default function PatientSignUp() {
  const navigate = useNavigate();

  // State management for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [aadhaarNo, setAadhar] = useState("");
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
        .from("patients") // Adjust the table name if needed
        .insert({
          firstName: firstName,
          lastName: lastName,
          email,
          password,
          aadhaarNo,
          walletAddress,
        });

      if (dbError) throw dbError;

      alert("Account created successfully!");
      navigate("/patient/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
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
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div>
              <label
                htmlFor="aadhaarNo"
                className="block text-sm font-medium text-gray-900"
              >
                Aadhar No.
              </label>
              <input
                id="aadhaarNo"
                name="aadhaarNo"
                type="text"
                pattern="\d{12}"
                required
                value={aadhaarNo}
                onChange={(e) => setAadhar(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div>
              <label
                htmlFor="walletAddress"
                className="block text-sm font-medium text-gray-900"
              >
                Wallet Address
              </label>
              <input
                id="walletAddress"
                name="walletAddress"
                type="text"
                required
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div></div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 block w-full rounded-md px-3 py-1.5"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white"
              >
                Sign up
              </button>
              <div className="text-sm mt-4 text-center">
                <a
                  onClick={() => navigate("/patient/login")}
                  className="cursor-pointer text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account? Sign In here.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
