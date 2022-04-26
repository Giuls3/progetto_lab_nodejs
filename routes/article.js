const express = require('express');
const router = express.Router();
const db = require("../src/db");



/* GET users listing. */
router.get("/", async function (req, res, next) {
  const articoli = await db.getAllArticle();
  res.render("articoli", { title: "Articles Page - Domus Mirabilia Blog", articoli, dynamicPartial: () => "articoli" });
});


module.exports = router;
