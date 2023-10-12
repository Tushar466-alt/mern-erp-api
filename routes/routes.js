const express = require('express');
const { newProject, 
        getProject, 
        updateProject, 
        updateIndivisualsField,
      } = require('../controller/index.js');
const { validateProjectData } = require('../validater/validate.js');
const router = express.Router();


router
    .route('/project')
    .get(getProject)
    .post(validateProjectData, newProject)

router
      .route('/project/:id')
      .put(validateProjectData, updateProject)
      .patch(validateProjectData, updateIndivisualsField)
      

module.exports = router;