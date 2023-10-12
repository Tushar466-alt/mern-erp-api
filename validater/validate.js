const moment = require('moment');
const { body, check } = require('express-validator');
const { projectModel } = require('../model/project.js');

const isOnlyCharacters = async (value) => {
    const existingProjectName = await projectModel.findOne({ project_name: value });
    
            if (existingProjectName) {
              throw new Error('Project name is already in use');
            }

    return true;
  };

const dateValidate = async (value, { req }) => {

    if (!moment(value, 'YYYY-MM-DD', true).isValid()) {
        throw new Error('Invalid date format. Please provide a date in YYYY-MM-DD format.');
    }
    
    const existingStartDate = await projectModel.findOne({ project_start_date: value });
    if (existingStartDate) {
        throw new Error('Date already taken. Please provide another date.');
    }
    
    return true;
    }

const validateProjectData = [
    check('project_name')
        .isString()
        .notEmpty()
        .withMessage('Project name is required')
        .custom(isOnlyCharacters)
        .matches(/^[A-Za-z]+$/)
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