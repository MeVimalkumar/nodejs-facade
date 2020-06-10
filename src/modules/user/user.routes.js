const { Router } = require("express");
const controller = require("./user.controller");

const router = new Router();

router.route('/')
    .post((...args) => controller.create(...args))
    .get((...args) => controller.find(...args));

router.route('/:id')
    .get((...args) => controller.findById(...args))
    .put((...args) => controller.findByIdAndUpdate(...args))
    .delete((...args) => controller.findByIdAndDelete(...args));

module.exports = router;