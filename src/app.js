const express = require('express');
const apiRouter = require('./api/router')
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api", apiRouter)

app.use("/test", function(req, res) {
    res.status(200).json(apiRouter.stack)
})

module.exports = app