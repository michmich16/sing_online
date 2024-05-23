import express from 'express';
import AlbumModel from '../Models/album.model.js';
export const AlbumController=express.Router();

AlbumController.get('/Album', async(req, res)=>{
    const data = await AlbumModel.getAllRecords()
    res.send(data)
});

AlbumController.get('/Album/:id', async(req, res) =>{
    const data = await AlbumModel.getAllRecords()
    res.send(data)
})