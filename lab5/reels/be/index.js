// import express  from "express";
// import mongoose from "mongoose";
// import Cors from "cors";
// import Videos from "./Models/dbVideo.js";

//App Config
const express = require('express');
const mongoose = require("mongoose");
const Cors = require('cors');
const Videos = require('./Models/dbVideo.js')
const app = express();
const port = process.env.PORT || 9000;
const connection_url = "mongodb+srv://hvuquang2406:huydeptrainhat1@cluster0.orcanxk.mongodb.net/REELS?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, () => {
  console.log("DB connected");
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("He so lo, ho so ly ly"));

app.post("v2/posts", (res, req) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))