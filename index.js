import express from 'express';
import dotenv from 'dotenv';
import { SongController } from './Controllers/song.controller.js';
const app = express()
const port = process.env.PORT
dotenv.config();

app.get('/', (req, res) => {
    res.send ('Velkommen til min sangbog')
})
app.use(express.urlencoded({ extended: true }));

app.use(SongController)

SongController.get('/songs/:id([0-9A-Za-z]*)', async (req, res) => {
    console.log(req.params.id)
 })

app.listen(port,()=>{
    console.log(`webserver is running now 0n http://localhost:${port}`);
})
