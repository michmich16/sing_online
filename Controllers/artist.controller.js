import express from 'express';
import ArtistModel from '../Models/artist.model.js'
export const ArtistController = express.Router();

ArtistController.get('/Artist', async(req, res) => {
    const data = await ArtistModel.getAllRecords()
    res.send(data)
});

ArtistController.get('/Artist/:id', async (req, res) =>{
    const data = await ArtistModel.getRecordByID(req.parans.id)
    res.send(data)
});