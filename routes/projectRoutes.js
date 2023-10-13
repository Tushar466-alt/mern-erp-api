const express = require('express');
const router = express.Router();
const { newProject, 
        getProject, 
        updateProject, 
        updateIndivisualsField,
      } = require('../controller/projectController.js');
const { validateProjectData } = require('../validations/projectValidate.js');


router
    .route('/project')
    .get(getProject)
    .post(validateProjectData, newProject)

router
      .route('/project/:id')
      .put(validateProjectData, updateProject)
      .patch(validateProjectData, updateIndivisualsField)
      

module.exports = router;