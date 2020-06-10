const postRoutes = require("./modules/post/post.routes");
const userRoutes = require("./modules/user/user.routes");
const { Router } = require("express");

const router = new Router();

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;