// const router = require("express").Router();
// const { createItem, getItems } = require("../controllers/itemController");

// router.post("/", createItem);
// router.get("/", getItems);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { createItem, getItems } = require("../controllers/itemController");

router.post("/", createItem); // Create item
router.get("/", getItems); // Get all items

module.exports = router;