const PostModel = require("./post.model");
const Controller = require('../../lib/controller');
class PostController extends Controller {

}

module.exports = new PostController(PostModel);