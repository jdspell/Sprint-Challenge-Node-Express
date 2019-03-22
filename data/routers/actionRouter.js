const express = require('express');

const Actions = require('../helpers/actionModel.js');

const actionRouter = express.Router();


actionRouter.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);

    } catch (error) {
        res.status(500).json({ message: "Unable to retrieve actions." });
    }
});

actionRouter.post('/', async (req, res) => {
    try {
        const newAction = await Actions.insert(req.body);
        res.status(200).json(newAction);

    } catch (error) {
        res.status(500).json({ message: "Unable to add action." });
    }
});

actionRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Actions.remove(req.params.id);
        res.status(200).json(deleted);

    } catch (error) {
        res.status(500).json({ message: "Unable to delete action." });
    }
});

actionRouter.put('/:id', async (req, res) => {
    try {
        const updated = await Actions.update(req.params.id, req.body);
        res.status(200).json(updated);

    } catch (error) {
        res.status(500).json({ message: "Unable to update action." });
    }
});


module.exports = actionRouter;