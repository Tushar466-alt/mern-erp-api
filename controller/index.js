const { projectModel } = require('../model/project.js');
const { validationResult } = require('express-validator');


async function project(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { 
            project_name, 
            project_details, 
            project_start_date, 
            project_due_date, 
            project_workers, 
            project_status 
        } = req.body;
        
        const newProject = new projectModel({
            project_name, 
            project_details, 
            project_start_date, 
            project_due_date, 
            project_workers, 
            project_status 
        });

        await newProject.save();

        res.status(201).json({ message: 'Project created successfully' });
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    project,
};