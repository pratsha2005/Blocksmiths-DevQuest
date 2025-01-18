const mongoose = require('mongoose');

//Name
const NameSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true }
});

//Address
const AddressSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true }
});

//Contact
const ContactDetailsSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: AddressSchema, required: true }
});

//Identification
const IdentificationSchema = new mongoose.Schema({
  nationalId: { type: String },
  passportNumber: { type: String },
  insuranceId: { type: String }
});

//Medications
const MedicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true },
  duration: { type: String, required: true }
});

//Procedures
const ProcedureSchema = new mongoose.Schema({
  procedureName: { type: String, required: true },
  datePerformed: { type: Date, required: true }
});

//Attachments
const AttachmentSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  fileHash: { type: String, required: true } // IPFS/Filecoin hash
});

//Medical History
const MedicalHistorySchema = new mongoose.Schema({
  recordId: { type: String, required: true },
  date: { type: Date, required: true },
  diagnosis: { type: String, required: true },
  treatment: {
    medications: [MedicationSchema],
    procedures: [ProcedureSchema]
  },
  notes: { type: String },
  attachments: [AttachmentSchema]
});

//Emergency Contacts
const EmergencyContactSchema = new mongoose.Schema({
  name: { type: NameSchema, required: true },
  relationship: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String }
});

//Data Access Control
const DataAccessSchema = new mongoose.Schema({
  entityId: { type: String, required: true },  
  role: { type: String, required: true },
  accessLevel: { type: String, required: true },
  expiryDate: { type: Date }          
});

// Main Patient Schema
const PatientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  personalDetails: {
    name: { type: NameSchema, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    contactDetails: { type: ContactDetailsSchema, required: true },
    identification: { type: IdentificationSchema }
  },
  medicalHistory: [MedicalHistorySchema],      
  emergencyContacts: [EmergencyContactSchema],  
  dataAccess: [DataAccessSchema]           
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);
