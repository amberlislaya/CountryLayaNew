const { json } = require("sequelize");
const { Activity } = require("../db");
const { Op } = require("sequelize");

const getActivityH = (req, res) => {
try {
    const allActivity = Activity.findAll();

    if(!allActivity.length) res.status(200).send("Sin Novedad");
    else res.status(200).json(allActivity)

} catch (error) {
  console.log("error1")
  res.status(400).json({error: error.message});  
}
};
module.exports = getActivityH;
