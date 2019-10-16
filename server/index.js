const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const cors = require('cors');
const passport = require('passport');

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));