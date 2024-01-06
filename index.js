const express = require('express');
const app = express();
const mongoose = require('./connection/user');//mongo db connected
const USER = require('./models/user');

const routes = require('./routes/index');

app.use(express.urlencoded({ extended: false }));

app.use('/', routes);



const PORT = 1806;
app.listen(PORT, () => console.log(`Server Started Successfully at port ${PORT}`));


