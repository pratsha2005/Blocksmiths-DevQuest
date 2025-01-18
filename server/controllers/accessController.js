const Access = require("../models/accessModel");
const Record = require("../models/recordModel");

/**
 * Grant access to a health record
 */
exports.grantAccess = async (req, res) => {
  try {
    const { recordId, grantedTo, expiryDate } = req.body;

    // Ensure the requester is the owner of the record
    const record = await Record.findById(recordId);
    if (!record) {
      return res.status(404).json({ message: "Record not found." });
    }
    if (record.patientId.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to grant access to this record." });
    }

    // Retrieve or create access entry
    const accessEntry = await Access.findOneAndUpdate(
      { recordId },
      { $setOnInsert: { recordId, grantedTo: [], expiryDate: null } },
      { new: true, upsert: true }
    );

    // Add new users to the grantedTo list, avoiding duplicates
    grantedTo.forEach((userId) => {
      if (!accessEntry.grantedTo.includes(userId)) {
        accessEntry.grantedTo.push(userId);
      }
    });

    // Update expiry date if provided
    if (expiryDate) {
      accessEntry.expiryDate = expiryDate;
    }

    await accessEntry.save();
    res.status(200).json({ message: "Access granted successfully.", access: accessEntry });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while granting access.", details: error.message });
  }
};

/**
 * Revoke access to a health record
 */
exports.revokeAccess = async (req, res) => {
  try {
    const { recordId, revokedFrom } = req.body;

    // Ensure the requester is the owner of the record
    const record = await Record.findById(recordId);
    if (!record) {
      return res.status(404).json({ message: "Record not found." });
    }
    if (record.patientId.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to revoke access to this record." });
    }

    // Find the access entry for the record
    const accessEntry = await Access.findOne({ recordId });
    if (!accessEntry) {
      return res.status(404).json({ message: "No access entry found for this record." });
    }

    // Remove users from the grantedTo list
    accessEntry.grantedTo = accessEntry.grantedTo.filter((userId) => !revokedFrom.includes(userId));
    await accessEntry.save();

    res.status(200).json({ message: "Access revoked successfully.", access: accessEntry });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while revoking access.", details: error.message });
  }
};

/**
 * Get access details for a specific record
 */
exports.getAccessDetails = async (req, res) => {
  try {
    const { recordId } = req.params;

    // Ensure the requester is the owner of the record
    const record = await Record.findById(recordId);
    if (!record) {
      return res.status(404).json({ message: "Record not found." });
    }
    if (record.patientId.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to view access details for this record." });
    }

    // Retrieve access entry
    const accessEntry = await Access.findOne({ recordId }).populate("grantedTo", "name email role");
    if (!accessEntry) {
      return res.status(404).json({ message: "No access entry found for this record." });
    }

    res.status(200).json({ message: "Access details retrieved successfully.", access: accessEntry });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving access details.", details: error.message });
  }
};

/**
 * Verify access for a specific user and record
 */
exports.verifyAccess = async (req, res) => {
  try {
    const { recordId, userId } = req.params;

    // Find access entry for the record
    const accessEntry = await Access.findOne({ recordId });
    if (!accessEntry || !accessEntry.grantedTo.includes(userId)) {
      return res.status(403).json({ message: "Access not granted for this user." });
    }

    // Check if access is expired
    if (accessEntry.expiryDate && new Date() > new Date(accessEntry.expiryDate)) {
      return res.status(403).json({ message: "Access has expired for this user." });
    }

    res.status(200).json({ message: "Access verified successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while verifying access.", details: error.message });
  }
};
