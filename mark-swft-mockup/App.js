const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

//initialize express
const app = express();

//use body-parser to send form data
app.use(bodyParser.urlencoded({extended: true}));
//use express.static srv public folder as static directory
app.use(express.static('public'));

//Connecting to database
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}). then(() => console.log('DB Connected'));

const port = process.env.PORT || 3001;

app.post('/submit-email', function( req,res) {
    return res.redirect()
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});