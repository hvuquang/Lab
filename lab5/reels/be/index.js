
const connection_url = "mongodb+srv://huy:huy123456@cluster0.3ytdre4.mongodb.net/reels1?retryWrites=true&w=majority";
const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const VideoDB = require("./Models/Video");
const app = express();
// const connection_url='mongodb+srv://truong123:123456tr@cluster0.9wqb6hv.mongodb.net/reels?retryWrites=true&w=majority'
// const connection_url = 'mongodb://localhost/reels1'
const VideoRoute = require('./Routes/video');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(Cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(connection_url, {useNewUrlParser: true}, (err) => {
  if(err) {
    console.log("DB not connected")
    console.log(err)
  }
  else
  console.log("DB connected");
});


// app.get("/", (req, res) => res.status(200).send("Hello, Vu Quang Huy"));
// app.post("/v2/post",async (req, res) => {
//   const dbVideos = req.body;
//   VideoDB.create(dbVideos, (err, data) => {
//     if (err) res.status(500).send(err);
//     else res.status(201).send(data);
//   });
// });
// app.get("/v2/get", async (req, res) => {
//   VideoDB.find()
//   .then(response => {
//     res.json({
//       response
//     })
//   })
//   .catch(error => {
//     res.json({
//       message: "Error"
//     })
//   })
// });

app.use('', VideoRoute)

app.listen(9000, () => console.log(`listening on localhost:  9000`));
