const express = require('express');
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.DAILYAPP_URI;
mongoose.connect (uri)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.listen(port, ()=> {
  console.log('server in running on port:' + port)
})
