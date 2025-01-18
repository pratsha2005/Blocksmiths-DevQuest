const Record = require("../models/recordModel");

// Create a new health record
const createRecord = async (req, res) => {
  try {
    const { patientId, title, description, documentUrl } = req.body;
    const record = await Record.create({ patientId, title, description, documentUrl });
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error creating record", error });
  }
};

// Get all records for a specific patient
const getRecordsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const records = await Record.find({ patientId });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records", error });
  }
};

// Get a specific record by ID
const getRecordById = async (req, res) => {
  try {
    const { recordId } = req.params;
    const record = await Record.findById(recordId);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error fetching record", error });
  }
};

// Delete a specific record
const deleteRecord = async (req, res) => {
  try {
    const { recordId } = req.params;
    const record = await Record.findByIdAndDelete(recordId);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting record", error });
  }
};

module.exports = {
  createRecord,
  getRecordsByPatient,
  getRecordById,
  deleteRecord,
};
