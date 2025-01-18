const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Patient ID is required"],
    },
    title: {
      type: String,
      required: [true, "Record title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    documentUrl: {
      type: String,
      required: [true, "Document URL is required"],
    },
    dateUploaded: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", recordSchema);
