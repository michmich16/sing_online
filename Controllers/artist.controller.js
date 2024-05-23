import express from 'express';
import ArtistModel from '../Models/artist.model.js'
export const ArtistController = express.Router();

ArtistController.get('/artist', async(req, res) => {
    const data = await ArtistModel.getAllRecords()
    res.send(data)
});

ArtistController.get('/artist/:id', async (req, res) =>{
    const data = await ArtistModel.getRecordByID(req.parans.id)
    res.send(data)
});

// post
ArtistController.post('/artist', async(req, res) => {
    const data = await ArtistModel.createRecord(req.body)
    res.send(data)
});
// put
ArtistController.put('/artist', async(req, res) => {
    const data = await ArtistModel.updateRecord(req.body)
    res.send(data)
});