const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerCountries = require("./routerCountries");
const routerActivities = require("./routerActivities.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", routerCountries);
router.use("/activity", routerActivities);

module.exports = router;
