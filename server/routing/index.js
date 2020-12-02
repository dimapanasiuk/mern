const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.send("<h1>Test</h1>");
  });