import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/Songs', async (req, res) => { 
    const data = await SongModel.getAllRecords()
    res.send(data)
});