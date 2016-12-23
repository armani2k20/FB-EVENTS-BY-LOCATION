//requires the required modules
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
//establishes the route for the index (indexController.showIndex)
router.get("/", indexController.showIndex);
//exports the route to be used
module.exports = router;