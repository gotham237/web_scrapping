const express = require("express");
const router = express.Router();
const main = require("../scrapeFN/scrape");
const fs = require("fs");

//sending homepage
router.get("/", async (req, res) => {
  const htmlPath = path.join(__dirname, "public", "index.html");
  res.sendFile(htmlPath);
});

router.post("/indeed", async (req, res) => {
  try {
    const { skill } = req.body;
    let scrape = await main(skill);
    return res.status(200).json({
      status: "ok",
      list: scrape.list,
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getData", async (req, res) => {
  try {
    const jobs = path.join(__dirname, "..", "job.json");
    res.status(200).sendFile(jobs);
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
