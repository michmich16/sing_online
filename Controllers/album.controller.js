import express from 'express';
import AlbumModel from '../Models/album.model.js';
export const AlbumController=express.Router();

AlbumController.get('/album', async(req, res)=>{
    const data = await AlbumModel.getAllRecords()
    res.send(data)
});

AlbumController.get('/album/:id', async(req, res) =>{
    const data = await AlbumModel.getAllRecords()
    res.send(data)
})