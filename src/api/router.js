const express = require('express');
const UserRouter = require('./components/user/router')

function apiRouter() {
    const router = express.Router()
    UserRouter.setRoutes(router)
    return router
}

module.exports = apiRouter()