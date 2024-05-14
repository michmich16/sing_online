import express from 'express'
import SongModel from '../Models/song.model.js';
export default SongController = express.Router();

SongController.get('/Songs', async (req, res) =>{ 
    const data = SongModel.getAllRecords()
    res.send(data)
});