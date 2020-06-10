const Model = require("../../lib/model");
const PostSchema = require("./post.schema");
class PostModel extends Model {

}

module.default = new Model('Post', PostSchema);