const {Op} = require("sequelize");
const {Country, Activity} = require("../db")




const getCountiesName = async (req, res) => {
 const {name} = req.query;
 try {
  if(!name){
    const allCountryC = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });

const mapInfo = allCountryC.map((element) => {
  return {
    id: element.id,
    name: element.name,
    image: element.image,
    continent:element.continent,
    capital: element.capital,
    subregion: element.subregion,
    area: element.area,
    population: element.population,
    Activities: element.Activities.map((e) => e.name),
  };
});


    return res.status(200).json(mapInfo);
  }else{
    const country = await Country.findAll({
      where: {name: {[Op.iLike]: `%${name.toLowerCase()}%`}},
    });
    if(!country)
    return res.status(404).json({error: "No se encontro el pais"});
    return res.status(200).json(country);
  }
 } catch (error) {
  res.status(400).json({error: error.message});
 }
}

module.exports = getCountiesName;



























































