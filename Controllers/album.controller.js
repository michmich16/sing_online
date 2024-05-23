import express from 'express';
import AlbumModel from '../Models/album.model.js';
export const AlbumController=express.Router();

AlbumController.get('/albums', async(req, res)=>{
    const data = await AlbumModel.getAllRecords()
    res.send(data)
});

AlbumController.get('/albums/:id([0-9A-Za-z]*)', async(req, res) =>{
    const data = await AlbumModel.getAllRecords()
    res.send(data)
});
// post
AlbumController.post('/albums', async(req, res) => {
    const data = await AlbumModel.createRecord(req.body)
    res.send(data)
});
// put
AlbumController.put('/albums', async(req, res) => {
    const data = await AlbumModel.updateRecord(req.body)
    res.send(data)
});