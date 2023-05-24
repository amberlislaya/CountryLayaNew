const { Router } = require("express");
const getCountriesH = require("../Handlers/countriesHandlres");
const postCountriesH = require("../Handlers/countriesHandlres");
const getCountriesByIdH = require("../Handlers/countriesHandlres");

const routerCountries = Router();

routerCountries.get("/", getCountriesH); //CALL ALL COUNTRIES, FOR NAME
routerCountries.get("/:idPais", getCountriesByIdH); //CALL ALL FOR ID
routerCountries.post("/", postCountriesH); //CREATE CONTRIES

module.exports = routerCountries;
