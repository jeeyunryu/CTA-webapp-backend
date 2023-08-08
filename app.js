import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import cors from 'cors'
import { initRoutes } from './route.js'

console.log(process.env.DATABASE_URL)
const app = express()

app.use(cors())
app.use(express.json())

initRoutes(app);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});
