import express from 'express';
import dotenv from 'dotenv';
import { ProfilesController } from './Controllers/profiler.controller.js';
import { SongController } from './Controllers/song.controller.js';
import { ArtistController } from './Controllers/artist.controller.js';
import { AlbumController } from './Controllers/album.controller.js';
const app = express()
const port = process.env.PORT
dotenv.config();

app.get('/', (req, res) => {
    res.send ('Velkommen til min sangbog')
})
app.use(express.urlencoded({ extended: true }));

app.use(ProfilesController)
 app.use(SongController)
 app.use(ArtistController)
 app.use(AlbumController)

app.listen(port,()=>{
    console.log(`webserver is running now 0n http://localhost:${port}`);
})