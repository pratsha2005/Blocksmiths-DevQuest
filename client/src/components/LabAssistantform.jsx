import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LabReportForm = () => {
  const { patientId } = useParams(); // Retrieve patient ID from the URL
  const [diagnosis, setDiagnosis] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [treatmentNotes, setTreatmentNotes] = useState('');
  const [notes, setNotes] = useState('');
  const [attachments, setAttachments] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle file input change
  const handleFileChange = (e) => {
    setAttachments(e.target.files);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('patientId', patientId);
    formData.append('diagnosis', diagnosis);
    formData.append('medication', medication);
    formData.append('dosage', dosage);
    formData.append('treatmentNotes', treatmentNotes);
    formData.append('notes', notes);
    
    // Append attachments to the FormData object
    if (attachments) {
      Array.from(attachments).forEach((file) => {
        formData.append('attachments', file);
      });
    }

    try {
      const response = await axios.post('/api/lab-report', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Lab report submitted successfully!');
        // Optionally reset the form
        setDiagnosis('');
        setMedication('');
        setDosage('');
        setTreatmentNotes('');
        setNotes('');
        setAttachments(null);
      }
    } catch (error) {
      console.error('Error submitting lab report:', error);
      alert('Error submitting lab report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Lab Report for Patient {patientId}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="diagnosis">Diagnosis:</label>
        <input
          type="text"
          id="diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          required
          placeholder="Enter diagnosis (e.g., Hypertension)"
        />

        <label htmlFor="medication">Medication:</label>
        <input
          type="text"
          id="medication"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Enter medication (e.g., Amlodipine)"
        />

        <label htmlFor="dosage">Dosage:</label>
        <input
          type="text"
          id="dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          placeholder="Enter dosage (e.g., 5mg once daily)"
        />

        <label htmlFor="treatmentNotes">Treatment Notes:</label>
        <textarea
          id="treatmentNotes"
          value={treatmentNotes}
          onChange={(e) => setTreatmentNotes(e.target.value)}
          rows="4"
          placeholder="Enter treatment notes"
        />

        <label htmlFor="attachments">Attach Lab Report:</label>
        <input
          type="file"
          id="attachments"
          name="attachments"
          accept=".pdf,.jpg,.jpeg,.png"
          multiple
          onChange={handleFileChange}
          required
        />

        <label htmlFor="notes">Additional Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
          placeholder="Enter additional notes"
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Lab Report'}
        </button>
      </form>
    </div>
  );
};

export default LabReportForm;