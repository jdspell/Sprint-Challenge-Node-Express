const express = require('express');

const Projects = require('../helpers/projectModel.js');

const projectRouter = express.Router();


projectRouter.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        console.log(projects);
        res.status(200).json(projects);

    } catch (error) {
        res.status(500).json({ message: "Unable to retrieve projects." });
    }
});


projectRouter.post('/', async (req, res) => {
    try {
        const newProject = await Projects.insert(req.body);
        console.log(newProject);
        res.status(200).json(newProject);

    } catch (error) {
        res.status(500).json({ message: "Unable to create post." });
    }
});


projectRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Projects.remove(req.params.id);
        res.status(200).json(deleted);

    } catch (error) {
        res.status(500).json({ message: "Unable to delete post." });
    }
});


projectRouter.put('/:id', async (req, res) => {
    try {
        const updated = await Projects.update(req.params.id, req.body);
        res.status(200).json(updated);

    } catch (error) {
        res.status(500).json({ message: "Unable to update post." });
    }
});

projectRouter.get('/:id/actions', async (req, res) => {
    try {
        const projectActions = await Projects.getProjectActions(req.params.id);
        res.status(200).json(projectActions);

    } catch (error) {
        res.status(500).json({ message: "Unable to retrieve project actions." });
    }
});

module.exports = projectRouter;