// PROFILES DATABASE

import express from 'express';
import ProfilesModel from '../Models/profiler.model.js';
export const ProfilesController = express.Router();
// profiles get all
ProfilesController.get('/profiles', async (req, res) => {
    const data = await ProfilesModel.getAllRecords()
    res.send(data)
});
// profiles get by id
ProfilesController.get('/profiles/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = await ProfilesModel.getRecordByID(req.params.id)
    res.send(data);
})
// profiles post
ProfilesController.post('/profiles', async (req, res) => {
    const data = await ProfilesModel.createRecord(req.body)
    res.send(data);
})
// profiles put
ProfilesController.put('/profiles', async (req, res) => {
    const data = await ProfilesModel.updateRecord(req.body)
    res.send(data)
})

// profiles delete
ProfilesController.delete('/profiles', async (req, res) => {
    const data = await ProfilesModel.deleteRecord(req.body)
    res.send(data)
});