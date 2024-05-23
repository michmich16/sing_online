import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/songs', async (req, res) => { 
    const data = await SongModel.getAllRecords()
    res.send(data)
});

SongController.get('/songs/:id', async (req, res)=>{
    const data = await SongModel.getRecordByID(req.params.id)
    res.send(data);
})

SongController.post('/songs', async(req, res) =>{
    const data = await SongModel.createRecord(req.body)
    res.send(data);
})

SongController.get('/songs/:id([0-9A-Za-z]*)', async (req, res) => {
    const single = await SongModel.getRecordById(req.params.id);
 })