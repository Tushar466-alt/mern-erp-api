const { body } = require('express-validator');
const { isOnlyCharacters, dateValidate, } = require('../controller/projectController.js');

const validateProjectData = [
    body('project_name')
        .isString()
        .notEmpty()
        .withMessage('Project name is required')
        .custom(isOnlyCharacters)
        .isAlpha()
        .withMessage('Invalid input. Only characters are allowed.')
        .trim(),

    body('project_details')
        .isString()
        .notEmpty()
        .withMessage('Project details is required')
        .trim(),

    body('project_start_date')
        .notEmpty()
        .withMessage('Project start date is required')
        .custom(dateValidate),
    
    body('project_due_date')
        .notEmpty()
        .withMessage('Project due date is required')
        .custom(dateValidate),
        
    body('project_workers')
        .notEmpty()
        .withMessage('Project workers is required')
        .matches(/^\d+$/)
        .withMessage('Invalid input. Only numeric values are allowed.'),

    body('project_status')
        .notEmpty()
        .withMessage('Project status is required')
        .isString()
        .isIn(['complete', 'incomplete', 'pending', 'rejected'])
        .withMessage("Please Select the Select box value")
        
    
];

module.exports = {
    validateProjectData,
};