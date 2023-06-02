const { json } = require("sequelize");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const {postActivity} = require("../Controllers/getActivity") 


const postActivityH = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  console.log("hola");
  try {
    const newActivity = await postActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).json(newActivity);
  } catch (error) {
    console.log("error4");
    res.status(400).json({ error: error.message });
  }
};

module.exports = postActivityH;
