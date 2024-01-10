import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();

app.use('/', routes);
const PORT = 8000;

Connection();

app.listen(PORT, ()=> {
    console.log(`server is running at port no ${PORT}`);
})


