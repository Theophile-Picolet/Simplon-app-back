const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// Define API routes
router.get("/blagues", apiController.getBlagues);
router.get("/blagues/:id", apiController.getBlagueById);
router.post("/blagues", apiController.createBlague);
router.get("/random-blague", apiController.getRandomBlague);

module.exports = router;
