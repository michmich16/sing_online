import express from 'express'
import dotenv from 'dotenv';

const app = express()
const port = 3000;

app.get('/',(req, res)=>{
	res.send('Forsiden')
})

app.get('/about',(req, res)=>{
	res.send('Om os')
})

app.listen(port,()=>{
    console.log(`webserver is running now 0n http://localhost:${port}`);
})

dotenv.config();