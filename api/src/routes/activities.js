const { Router } = require("express");
const getActivityH = require("../Handlers/getActivity");
const postActivityH = require("../Handlers/postActivity");

const router = Router();

router.get("/activities", getActivityH);
router.post("/activities", postActivityH);

module.exports = router;
