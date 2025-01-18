const express = require("express");
const {
  createRecord,
  getRecordsByPatient,
  getRecordById,
  deleteRecord,
} = require("../controllers/recordController");
const jwtMiddleware = require("../config/jwtMiddleware");

const router = express.Router();

// Create a new health record
router.post("/create", jwtMiddleware, createRecord);

// Get all records for a specific patient
router.get("/patient/:patientId", jwtMiddleware, getRecordsByPatient);

// Get a specific record by ID
router.get("/:recordId", jwtMiddleware, getRecordById);

// Delete a specific record
router.delete("/:recordId", jwtMiddleware, deleteRecord);

module.exports = router;
