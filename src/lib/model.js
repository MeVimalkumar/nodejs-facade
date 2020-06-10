const mongoose = require("mongoose");
class Model {
    constructor(name, schema) {
        this.model = mongoose.model(name, schema);
    }

    create(body) {
        const doc = new this.model(body);
        return doc.save();
    }

    find(...args) {
        return this.model.find(...args).exec();
    }

    findById(...args) {
        return this.model.findById(...args).exec();
    }

    findByIdAndUpdate(...args) {
        return this.model.findByIdAndUpdate(...args).exec()
    }

    findByIdAndDelete(...args) {
        return this.model.findByIdAndDelete(...args).exec()
    }
}

module.exports = Model