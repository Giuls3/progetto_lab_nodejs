const express = require('express');
const router = express.Router();
const db = require("../src/db");



/* GET users listing. */
router.get("/", async function (req, res, next) {
  const articoli = await db.getAllArticle();
  res.render("articoli", { title: "Articles Page - Domus Mirabilia Blog", articoli, dynamicPartial: () => "articoli" });
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const articolo = await db.getArticleById(id);
  console.log(userData);
  res.render("articolo", { title: "Articolo - Domus Mirabilia Blog", user: articolo, dynamicPartial: () => "articolo" });
});


module.exports = router;
