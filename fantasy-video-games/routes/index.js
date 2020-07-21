const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");

router.get('/', (req,res) => {
    res.send("server is up and running");
});

router.use(authRoutes);


module.exports = router;