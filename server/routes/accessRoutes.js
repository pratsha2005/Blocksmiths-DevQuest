const express = require("express");
const {
  grantAccess,
  revokeAccess,
  getAccessDetails,
  verifyAccess,
} = require("../controllers/accessController");
const jwtMiddleware = require("../config/jwtMiddleware");

const router = express.Router();

router.post("/grant", jwtMiddleware, grantAccess);
router.post("/revoke", jwtMiddleware, revokeAccess);
router.get("/details/:recordId", jwtMiddleware, getAccessDetails);
router.get("/verify/:recordId/:userId", jwtMiddleware, verifyAccess);

module.exports = router;
