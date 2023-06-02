const { Activity } = require("../db");


const postActivitiesC = async(name, difficulty, duration, season, countries) =>{
const activities = await Activity.create({
    name,
    difficulty,
    duration,
    season,
})
for(let data of countries){
    await activities.addCountry(data);
}
return activities.dataValues;
}

const ActivitiesgetC = async() => {
const activity = await Activity.findAll();
return activity;

}


module.exports = { postActivitiesC, ActivitiesgetC };