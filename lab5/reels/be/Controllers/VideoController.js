const Video = require("../Models/Video");

const index = (req, res, next) => {
  res.status(200);
  res.json({
    message: "Hello Vu Quang Huy",
  });
};

const show = (req, res, next) => {
  // let videoID = "638320bbd31c8c7fc5584eb8"
  // Video.findById(videoID)
  Video.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An Error Occurred",
      });
    });
};

const store = (req, res, next) => {
  let video = new Video({
    url: req.body.url,
    channel: req.body.channel,
    description: req.body.description,
    song: req.body.song,
    likes: req.body.likes,
    shares: req.body.shares,
    messages: req.body.messages,
  });
  video
    .save()
    .then((response) => {
      res.status(200);
      res.json({
        message: "Video Added Successfully!",
      });
    })
    .catch((error) => {
      res.status(404);
      res.json({
        message: "Failed to add video!",
      });
    });
};

module.exports = {
  index,
  show,
  store,
};
