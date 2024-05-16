import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/Songs', async (req, res) => { 
    const data = await SongModel.getAllRecords()
    res.send(data)
});

SongController.get('/Songs/:id', async (req, res)=>{
    const data = await SongModel.getRecordByID(req.params.id)
    res.send(data);
})