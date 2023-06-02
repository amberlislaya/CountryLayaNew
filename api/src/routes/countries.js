const { Router } = require("express");
const getCountriesH = require("../Handlers/AllCountryH");
const getCountiesName = require("../Handlers/AllCountryH")
const getCountriesByIdH = require("../Handlers/ByIdCountryH");



const router = Router();

router.get("/", getCountriesH); //CALL ALL COUNTRIES, FOR NAME
router.get("/countries/name", getCountiesName);
router.get("/:id", getCountriesByIdH); //CALL ALL FOR ID



module.exports = router;
