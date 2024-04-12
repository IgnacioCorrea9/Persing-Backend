const express = require("express");
const router = express.Router();
const passport = require("passport");

//variables
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

router.get(
  "/s3-credentials",
  /* passport.authenticate("jwt", { session: false }), */
  (req, res) => {
    res.json({
      success: true,
      data: { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey },
    });
  }
);

module.exports = router;
