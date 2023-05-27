const { json } = require("sequelize");
const { Country, Activity } = require("../db");
const {Op} = require("sequelize");


const getCountriesByIdH = async (req, res) => {
    const {id} = req.params;

  try {
const IdPais = id.toUpperCase();
const country = await Country.findOne({
  where: { id: IdPais },
  include: Activity,
}); 
  
if(country) return res.status(200).json(country);
else return res.status(400).send("Pais inexistente");

} catch (error) {
   res.status(400).json({error: error.message});     
}
};

module.exports = getCountriesByIdH;
