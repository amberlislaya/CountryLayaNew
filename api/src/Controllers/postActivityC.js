require("dotenv").config();
const { Country, Activity } = require("../db");
const axios = require("axios");

const infoApi = async () => {
const countries = await axios.get("https://restcountries.com/v3.1/all");
await countries.data.map((country)=> {
    const pais ={
        id: country.cca3,
        name: country.name.common,
        image: country.flag[1],
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "no existe",
        subregion: country.subregion ? country.subregion : "no existe",
        area: country.area,
        population: country.population,
    };
    Country.findOrCreate({where: pais})
})
}

module.exports = infoApi;
