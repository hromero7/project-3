const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const twitchRoutes = require("./twitch");

router.use("/auth",authRoutes);
router.use("/twitch", twitchRoutes);


module.exports = router;