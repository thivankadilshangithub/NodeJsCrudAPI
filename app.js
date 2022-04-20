const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const url = 'mongodb://localhost/AlienDBex';

const app = express();

mongoose.connect(url , {useNewUrlParser:true});
const con = mongoose.connection

con.on('open', () => {
    console.log("connecterd..")
});

app.use(cors());
app.use(express.json());

const alienRouter = require('./routers/aliens');
app.use('/aliens',alienRouter);

app.listen(9000,()=>{
    console.log("listing onport 9000");
});