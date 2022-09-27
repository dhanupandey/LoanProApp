/* eslint-disable @typescript-eslint/no-var-requires */
import Express = require('express');
import path = require("path");
import cors = require("cors");
import fs = require("fs");
import mongoose = require("mongoose");
const dburlserver = "mongodb+srv://dhanupandey:test12345@cluster0.s2usivc.mongodb.net/?retryWrites=true&w=majority"
const dburl = "mongodb://localhost:27017/brilliodb5"


const port = process.env.port || 3333;
const server = Express();
const cosrsOption = {
    exposedHeaders : 'Auth'
};
server.use(cors(cosrsOption))

//server.use(Express.static(path.resolve(__dirname, "./build")))
server.use(Express.json());
server.use('/user', require("./app/user"))
server.use('/admin', require("./app/admin"))



server.get("/", function(req,res){

    res.send("Hello from API")
  
  })

server.listen(port, ()=>{
    mongoose.connect(dburl, (error)=>{
        if(error)
        {
            console.log("err", error)
        }
        else{
            console.log("connected")
        }
    })
    console.log("I am connected");
});

