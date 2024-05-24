import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();
// get all
SongController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords()
    res.send(data)
});
// get by id
SongController.get('/songs/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = await SongModel.getRecordByID(req.params.id)
    res.send(data);
})
// post
SongController.post('/songs', async (req, res) => {
    const data = await SongModel.createRecord(req.body)
    res.send(data);
})
// put
SongController.put('/songs', async (req, res) => {
    const data = await SongModel.updateRecord(req.body)
    res.send(data)
})

// delete
SongController.delete('/songs', async (req, res) => {
    const data = await SongModel.deleteRecord(req.body)
    res.send(data)
});