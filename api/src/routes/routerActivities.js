const { Router } = require("express");
const getActivityH = require("../Handlers/ActivityGetH");
const postActivityH = require("../Handlers/ActivityPostH");

const routerActivities = Router();

routerActivities.get("/activities", getActivityH);
routerActivities.post("/activities", postActivityH);

module.exports = routerActivities;
