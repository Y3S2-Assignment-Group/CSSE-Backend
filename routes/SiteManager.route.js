const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  getSiteManagerDetails, loginSiteManager, registerSiteManager 
} = require("../controllers/SiteManager.controller");


router.post("/register", registerSiteManager);
router.post("/login", loginSiteManager);
router.get("/", auth, getSiteManagerDetails);

module.exports = router;
