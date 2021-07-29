const DefaultRouter = require('../../../utils/router')
const UserController = require('./controller')

class UserRouter extends DefaultRouter {}
module.exports = new UserRouter("users", UserController)