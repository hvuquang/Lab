const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    caption: String,
    user: {
        type:String,
        default:'Huy Vũ'
    } , 
    image: String
})

const Post = mongoose.model('Post',postSchema)
module.exports = Post