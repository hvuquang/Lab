const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shortVideoSchema = new Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
}, {timestamps: true})

const Video=mongoose.model('Video', shortVideoSchema)

module.exports = Video;