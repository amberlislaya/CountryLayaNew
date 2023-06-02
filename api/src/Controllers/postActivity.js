const {Activity} = require('../db')

const postActivity = async (name, difficulty, duration, season, countries) => {
  const activity = await Activity.create({
    name,
    difficulty,
    duration,
    season
  });
  for (let data of countries) {
    await activity.addCountry(data);
  }
  return activity;
};

module.exports = {postActivity};

