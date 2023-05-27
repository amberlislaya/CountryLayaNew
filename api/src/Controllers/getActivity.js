require('dotenv').config();
const {Country, Activity} = require("../db");
const axios = require("axios");


const countryCleaner = (array) =>
  array.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      image: elem.image,
      continent: elem.continent,
      capital: elem.capital,
      subregion: elem.subregion,
      area: elem.area,
      population: elem.population,
    };
  });

const allCountryC = async () => {
    const countryBd = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }

    });
    const infoApi = await axios.get("https://restcountries.com/v3.1/all");

    const paisApi = countryCleaner(infoApi.data);
    
    return [...paisApi, ...countryBd];
}

const nameCountryC = async (name) =>{

 const countryName = await Country.findAll({where: {name: name}});
 const infoApi = (await axios.get("https://restcountries.com/v3.1/all")).data;

 const pais = countryCleaner(infoApi);
 const countryApiName = pais.filter((ele1) => ele1.name.tolowerCase().includes(name.tolowerCase()));

  if(!countryName.length && !countryApiName.length) throw new Error('No existe el Pais')
 return [...countryName, ...countryApiName];
} 


module.exports = { allCountryC, nameCountryC };
