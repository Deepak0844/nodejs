// const { query } = require('express')
import express from "express";
import {MongoClient} from "mongodb";
import dotenv from 'dotenv';
import {moviesRouter} from "./routes/movies.js";
import cors from 'cors';

dotenv.config(); //all keys it will put in process.env
const app = express()

const PORT = process.env.PORT; // heroku will auto assign available port

app.use(cors()); // 3rd party middleware
//every request in the app is allowed cors/ access by any origin

   app.use(express.json());  //every request in the app body is parsed as json
   //express.json() - inbuilt middleware
  //  const MONGO_URL = "mongodb://localhost";
 
const MONGO_URL = process.env.MONGO_URL

  async function createConnections(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();  //promise
  console.log("mongodb connected");
  return client;
}
export const client = await createConnections();


app.get('/',(request,response)=>{
    response.send("hello");
})

app.use("/movies",moviesRouter);

app.listen(PORT,()=>console.log("App is started",PORT));



