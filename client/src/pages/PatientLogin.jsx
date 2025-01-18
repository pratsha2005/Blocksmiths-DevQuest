import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function PatientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Authenticate user
      const { data: loginData, error } = await supabase.auth.signInWithPassword(
        {
          email,
          password,
        }
      );

      if (error) throw error;

      // Retrieve user data (e.g., walletAddress) from the database
      const { data: userData, error: fetchError } = await supabase
        .from("patients") // Replace "patients" with your table name
        .select("aadhaarNo,firstName, walletAddress") // Specify the columns you want to retrieve
        .eq("email", email) // Match the email with the logged-in user's email
        .single(); // Retrieve only one record

      if (fetchError) throw fetchError;

      // Navigate to the dashboard with retrieved data
      navigate("/patient/dashboard", {
        state: {
          name: userData.firstName,
          walletAddress: userData.walletAddress,
          aadhaarNo: userData.aadhaarNo,
        },
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="https://media.istockphoto.com/id/1191123358/vector/herbal-medicine-concept.jpg?s=612x612&w=0&k=20&c=eIze2uz2AQ7AkhQwZTajshpc5od-1cQoFBRTlgCtoww=" alt="health suraksha " className="w-auto h-15 ml-15 " />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <div className="text-sm mt-4 text-center">
                <a
                  onClick={() => navigate("/patient/register")}
                  className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Don't have an account? Register here.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
