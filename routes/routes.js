const express = require('express');
const { project } = require('../controller/index.js');
const { validateProjectData } = require('../validater/validate.js');
const router = express.Router();

router.post('/project', validateProjectData, project);


module.exports = router;