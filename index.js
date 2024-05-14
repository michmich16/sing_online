import express from 'express';
import dotenv from 'dotenv';
import { songController } from './Controllers/song.controller.js';
const app = express()
const port = process.env.PORT || 3000
dotenv.config();

app.arguments(SongController)

app.listen(port,()=>{
    console.log(`webserver is running now 0n http://localhost:${port}`);
})
