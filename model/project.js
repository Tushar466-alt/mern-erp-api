const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    project_name:{
        type: String,
        required: true
    },
    project_details: {
        type: String,
        required: true
    },
    project_start_date: {
        type: String,
        required: true
    },
    project_due_date: {
        type: String,
        required: true
    },
    project_workers: {
        type: String,
        required: true
    },
    project_status: {
        type: String,
        required: true
    }
});

const projectModel = mongoose.model('project', projectSchema, 'projects');


module.exports = {
    projectModel,
};