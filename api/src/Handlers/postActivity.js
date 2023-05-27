const { json } = require("sequelize");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const postActivityH = async (req, res) => {
    const {id, name, difficulty, duration, season, countries} = req.body;
try {
    const activity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
    });
    const activityToAdd = await Country.findAll({
        where: {name: countries},
    });
    await activity.addCountry(activityToAdd);
    
    res.status(200).send("Busqueda Ejecutada")
} catch (error) {
    res.status(400).json({error: error.message});
}
};

module.exports = postActivityH;
