const router = require("express").Router();
const db = require("../../weapons/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(`SELECT * FROM authors`);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM authors WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, lastname, img } = req.body;
    const query = `INSERT INTO authors (name, lastname, img) VALUES ('${name}','${lastname}','${img}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, lastname, img } = req.body;
    const query = `UPDATE authors SET name='${name}', lastname='${lastname}', img='${img}' WHERE id=${parseInt(
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
      `DELETE FROM authors WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

/*
To much stuff to do
*/

module.exports = router;
