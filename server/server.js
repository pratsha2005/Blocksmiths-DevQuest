const express = require('express');
const connectDB = require('./connectDB');
const Patient = require('./models/Patient');

require('dotenv').config();

const app = express();

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

//Create a New Patient
app.post('/api/patients/create', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    const savedPatient = await patient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to create patient record.' });
  }
});

//Fetch All Patients
app.get('/api/patients/all', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch patients.' });
  }
});

//Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
