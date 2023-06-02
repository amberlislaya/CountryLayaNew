const {
  postActivitiesC,
  ActivitiesgetC,
} = require("../Controllers/controllersActivities");


const postActivities = async (req, res) =>{
 try {
    const {name, difficulty, duration, season, countries} = req.body;
   
    const newActivities = await postActivitiesC(name, difficulty, duration,season, countries)
    res.status(200).json(newActivities);

 } catch (error) {
    res.status(404).json({error: error.message})
 }
}


const handlerActivitiesget = async (req, res) => {
 try {
    const activity = await ActivitiesgetC();
    res.status(200).json(activity)
 } catch (error) {
    res.status(404).json({ error: error.message });
 }

}

module.exports = { handlerActivitiesget, postActivities };