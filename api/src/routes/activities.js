const {Router} = require("express")
const {handlerActivitiesget, postActivities} = require("../Handlers/handlersActivities");

const  router = Router();

router.get("/", handlerActivitiesget);
router.post("/", postActivities);

module.exports = router;



