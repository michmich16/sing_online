import express from 'express'
import dotenv from 'dotenv';

dotenv.config();


const api_key = process.env.APIKEY;
const port = process.env.PORT;
const app = express()

app.get('/',(req, res)=>{
	res.send('Forsiden')
})

app.get('/about',(req, res)=>{
	res.send('Om os')
})

app.get('/contact',(req, res)=>{
	res.send('Kontakt os')
})

app.listen(port,()=>{
    console.log(`webserver is running now 0n http://localhost:${port}`);
})
