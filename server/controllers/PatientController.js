const Patient = require('../models/Patient');

// Create new patient
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({ patientId: req.params.id });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update patient
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findOneAndUpdate(
      { patientId: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add medical history
exports.addMedicalHistory = async (req, res) => {
  try {
    const patient = await Patient.findOne({ patientId: req.params.id });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    patient.medicalHistory.push(req.body);
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update data access
exports.updateDataAccess = async (req, res) => {
  try {
    const patient = await Patient.findOne({ patientId: req.params.id });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    patient.dataAccess.push(req.body);
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};