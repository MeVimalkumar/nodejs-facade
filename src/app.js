const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path');
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const apiRoutes = require("./api.routes");
const { dbConnection } = require("./db");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())
app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', apiRoutes);

app.use((error, req, res, next) => {
    res.status(500).send('Internal Server Error');
})

dbConnection();
module.exports = app;