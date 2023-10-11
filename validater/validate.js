const { body } = require('express-validator');
const { projectModel } = require('../model/project.js');

const validateDate = (dateString) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  
    if (!dateRegex.test(dateString)) {
      throw new Error('Invalid date format. Please use dd-mm-yyyy format.');
    }
  
    const [day, month, year] = dateString.split('-').map(Number);
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error('Invalid date. Please provide a valid date.');
    }
  
    return true;
  };    

const validateProjectData = [
    body('project_name')
        .notEmpty()
        .withMessage('Project name is required')
        .custom(async (value, { req }) => {
            const existingProjectName = await projectModel.findOne({ project_name: value });
            if (existingProjectName) {
              throw new Error('Project name is already in use');
            }
            return true;
          })
          .trim(),

    body('project_details')
        .notEmpty()
        .withMessage('Project details is required')
        .trim(),

    body('project_start_date')
        .notEmpty()
        .withMessage('Project start date is required')
        .custom(async (value, { req }) => {
            const existingStartDate = await projectModel.findOne({project_start_date : value});
            if(existingStartDate) {
                throw new Error('Date already taken, Please provied other date');
            }
            return validateDate(value);
        }),
    
    body('project_due_date')
        .notEmpty()
        .withMessage('Project due date is required')
        .custom(async (value, { req }) => {
            const existingStartDate = await projectModel.findOne({project_due_date : value});
            if(existingStartDate) {
                throw new Error('Date already taken, Please provied other date');
            }
            return validateDate(value);
        }),

    body('project_workers')
        .notEmpty()
        .withMessage('Project workers is required'),

    body('project_status')
        .notEmpty()
        .withMessage('Project status is required'),  
];


module.exports = {
    validateProjectData,
};