const Controller = require("../../lib/controller");
const UserModel = require("./user.model");
class UserController extends Controller {

}

module.exports = new UserController(UserModel)