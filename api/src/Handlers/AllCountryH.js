const {Op} = require("sequelize");
const {Country, Activity} = require("../db")




const getCountriesH = async (req, res) => {
 const {name} = req.query;

 try {
  if(!name){
    const allCountryC = await Country.findAll({
      include: Activity,
    });
    return res.status(200).json(allCountryC);
  }else{
    const country = await Country.findAll({
      where: {name: {[Op.iLike]: `%{name}%`}},
    });
    if(!country)
    return res.status(404).json({error: "No se encontro el pais"});
    return res.status(200).json(country);
  }
 } catch (error) {
  res.status(400).json({error: error.message});
 }
}

module.exports = getCountriesH;







// const getCountiesName = async (req, res) => {

// const {name} = req.query;

// try {
//   if (name) {
//     const nameCountry = await nameCountryC(name);
//     res.status(200).json(nameCountry);
//   } else {
//     const response = await allCountryC();
//     res.status(200).json(response);
//   }
// } catch (error) {
//   res.status(400).json({error: error.message})
// }
// }

// module.exports = getCountiesName;





















































