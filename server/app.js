const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

//allow cross origin req
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const recipeRoutes = require('./routes/recipes');
app.use('/recipes',recipeRoutes);

//connect to db
//connect to mongo db
const url = 'mongodbURl';
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true }, function(err, db) {
    if(err) {
        console.log(err);
    }
    else {
        console.log('connected to ' + url);
        db.close();
    }
});

//lISTEN TO SERVER

app.listen(3000);