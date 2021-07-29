const DefaultController = require('../../../utils/controllers')
const User = require('./model')

class UserController extends DefaultController {}

module.exports = new UserController(User)