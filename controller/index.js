const { projectModel, project } = require('../model/project.js');
const { validationResult } = require('express-validator');


async function newProject(req, res) {
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

        return res.status(201).json({ message: 'Project created successfully' });
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Pleas fill the right data in the field" });
    }
}


async function getProject(req, res) {
    try{
        const data = await project.find();

        if(data.length == 0) {
            res.status(404).json({message: "Project not found"});
        }
        return res.status(200).json(data);
        
    }catch(err) {
        return res.status(500).json({message: "Internel server error"});
    }
}


async function updateIndivisualsField(req, res) {
    try {
        const errors = await validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        const projectID = await projectModel.findById({ _id: id });

        if (!projectID) {
            return res.status(404).json({ message: "No records found" });
        }

        await projectModel.findOneAndUpdate({ _id: id }, req.body);

        return res.status(200).json({ message: "Product updated" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Project not pdate." });
    }
}

async function updateProject(req, res) {
    try {
        const errors = await validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        const projectID = await projectModel.findById({ _id: id });

        if (!projectID) {
            return res.status(404).json({ message: "No records found" });
        }

        await projectModel.findOneAndUpdate({ _id: id }, req.body);

        return res.status(200).json({ message: "Product updated" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Project not pdate." });
    }
}
module.exports = {
    newProject,
    getProject,
    updateProject,
    updateIndivisualsField,
};