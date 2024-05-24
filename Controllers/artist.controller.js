import express from 'express';
import ArtistModel from '../Models/artist.model.js'
export const ArtistController = express.Router();
//get all
ArtistController.get('/artists', async(req, res) => {
    const data = await ArtistModel.getAllRecords()
    res.send(data)
});
//get by id
ArtistController.get('/artists/:id([0-9A-Za-z]*)', async (req, res) =>{
    const data = await ArtistModel.getRecordByID(req.parans.id)
    res.send(data)
});

// post
ArtistController.post('/artists', async(req, res) => {
    const data = await ArtistModel.createRecord(req.body)
    res.send(data)
});
// put
ArtistController.put('/artists', async(req, res) => {
    const data = await ArtistModel.updateRecord(req.body)
    res.send(data)
});

