import express from 'express';
import dotenv from 'dotenv';
import SongModel from './Models/song.model.js';
const app = express()

dotenv.config();

const port = process.env.PORT;

app.get('/',(req, res)=>{
	res.send('Forsiden')
})

app.post('/', (req, res)=>{
	res.send('Endpoint til POST')
})

app.get('/about',(req, res)=>{
	res.send('Om os')
})

app.get('/contact',(req, res)=>{
	res.send('Kontakt os')
})

// app.get('/songs', async (req, res)=>{
// 	const {data, error} = await supabase
// 	.from ('Songs')
// 	.select('title')
// 	if(error){
// 		console.error(error);
// 	} else{
// 		res.send(data)
// 	}
// })

app.listen(port,()=>{
    console.log(`webserver is running now 0n http://localhost:${port}`);
})
