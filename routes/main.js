let express = require('express');
let router = express.Router();
const controlador = require("../controllers/indexController");

router.get("/", controlador.index)
router.get("/detalleMenu/:id", controlador.detalle)

module.exports = router;