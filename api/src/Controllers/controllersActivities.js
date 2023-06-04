const { Activity, Country} = require("../db");


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
const activity = await Activity.findAll({
    attributes: ['name'],
    include: {
    model: Country,
    attributes: ['id'],
    through: {
    attributes: [],
    }

    }
});

const mapInfo = activity.map(elemt=>{
    return {
        name: elemt.name,
        Countries: elemt.Countries.map(e=>e.id)
    }
}) 
return mapInfo;

}


module.exports = { postActivitiesC, ActivitiesgetC };