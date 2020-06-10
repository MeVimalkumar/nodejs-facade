const Model = require("../../lib/model");
const UserSchema = require("./user.schema");
class UserModel extends Model {

}

module.exports = new UserModel('User', UserSchema)