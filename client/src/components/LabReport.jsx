import React, { useState } from "react";

const LabReport = () => {
  const [formData, setFormData] = useState({
    pid: "",
    diagnosis: "",
    medication: "",
    dosage: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "attachment" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4 text-center">Lab Report Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* PID */}
        <div>
          <label htmlFor="pid" className="block font-medium mb-2">
            PID
          </label>
          <input
            type="text"
            id="pid"
            name="pid"
            value={formData.pid}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Diagnosis */}
        <div>
          <label htmlFor="diagnosis" className="block font-medium mb-2">
            Diagnosis
          </label>
          <input
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Medication */}
        <div>
          <label htmlFor="medication" className="block font-medium mb-2">
            Medication
          </label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Dosage */}
        <div>
          <label htmlFor="dosage" className="block font-medium mb-2">
            Dosage
          </label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block font-medium mb-2">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            rows="3"
          />
        </div>

        {/* Attachment */}
        <div>
          <label htmlFor="attachment" className="block font-medium mb-2">
            Attachment
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LabReport;



// pid diagnosis medication
// dosage
// treatement notes 
// attatchment submit-button