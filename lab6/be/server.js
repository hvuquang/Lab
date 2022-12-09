const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/postRoutes')


const app = express()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

mongoose.connect('mongodb+srv://huy:123456@cluster0.3ytdre4.mongodb.net/REELS1?retryWrites=true&w=majority', () => {
    console.log('DB Connected');
})

app.use('/v1/post',postRoutes)

app.listen(8000, () => {
    console.log('Server running on port 8000');
})