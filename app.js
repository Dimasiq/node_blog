const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const keys = require('./keys');
const postRouter = require('./routes/post.js');

const port = process.env.PORT || 5000;
const viewsPath = path.join(__dirname, 'views');

mongoose.connect(keys.MongoURI)
    .then(() => {console.log('MongoDB connected!')})
    .catch(err => console.error(err))

const app = express();
app.use(bodyParser.json());
app.use('/api/post', postRouter);
app.use(express.static(viewsPath));

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
});
