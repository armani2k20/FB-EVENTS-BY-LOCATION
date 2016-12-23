//requires the required modules
const express = require("express");
const router = express.Router();
const eventSearchController = require("../controllers/eventSearchController");
//establishes the route for the events search (eventSearchController.searchForEvents)
router.get("/search/:text", eventSearchController.searchForEvents);
//exports the route to be used
module.exports = router;