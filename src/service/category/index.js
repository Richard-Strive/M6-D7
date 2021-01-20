const router = require("express").Router();
const db = require("../../weapons/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(`SELECT * FROM category`);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM category WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { category } = req.body;
    const query = `INSERT INTO category (category) VALUES ('${category}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { category } = req.body;
    const query = `UPDATE category SET category='${category}' WHERE id=${parseInt(
      req.params.id
    )};`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM category WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
