const router = require("express").Router();
const db = require("../../weapons/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(`SELECT * FROM aricle`);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/test", async (req, res, next) => {
  try {
    const {
      rows,
    } = await db.query(`SELECT * FROM public.authors INNER JOIN public.aricle ON authors_id=authors.id
    INNER JOIN public.category ON aricle_id=aricle.id`);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/test/:id2", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM aricle WHERE content LIKE '%${req.params.id2}%'`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM aricle WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { id, headline, subhead, content, cover, authors_id } = req.body;
    const query = `INSERT INTO aricle (headline, subhead, content, cover, authors_id) VALUES ('${headline}','${subhead}','${content}', '${cover}', '${authors_id}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id, headline, subhead, content, cover } = req.body;
    const query = `UPDATE aricle SET headline='${headline}', subhead='${subhead}', content='${content}', cover='${cover}' WHERE id=${parseInt(
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
      `DELETE FROM aricle WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
