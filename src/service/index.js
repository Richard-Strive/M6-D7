// in questo file importo i route dagli altri file e gli do un nome specifico. In questo modo quando esporto tutto

//Siccome abbiamo salvato all'interno del nostro file un file con il nome index.js possiamo semplicemente "richiedere" il file stesso senza dovere specificare il file.js stesso//
const authorRoute = require("./authors");
const categoryRoute = require("./category");
const articleRoute = require("./article");

const router = require("express").Router();

router.use("/author", authorRoute);
router.use("/category", categoryRoute);
router.use("/article", articleRoute);

module.exports = router;
