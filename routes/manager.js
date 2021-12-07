const express = require('express');
let router = express.Router();

router.
    route("/login")
    .get((req, res) => {
        res.send("manager login page");
    });

module.exports = router;