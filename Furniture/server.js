const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts');

//middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongosh "mongodb+srv://cluster0.czmvb.mongodb.net/myFirstDatabase" --apiVersion 1 --username wishmitha';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected');
    })

    .catch((err) => console.log('DB connection error', err));


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
