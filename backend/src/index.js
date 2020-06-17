const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://Alef:afladeoa@cluster0-nocnm.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 

//metodos HTTP: GET, POST, PUT, DELETE
// Params
// Query params: request.query (filtros, ordenação, paginação)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body : request.bedy

//mogoDB
app.listen(3333);



