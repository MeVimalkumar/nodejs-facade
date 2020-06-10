class Controller {
    constructor(Model) {
        this.Model = Model;
    }

    create(req, res, next) {
        this.Model.create(req.body).then(doc => {
            res.status(201).send(doc);
        }).catch(error => {
            next(error);
        });
    }

    find(req, res, next) {
        this.Model.find(req.query).then(doc => {
            res.status(200).send(doc);
        }).catch(error => {
            next(error);
        });
    }

    findById(req, res, next) {
        this.Model.findById(req.params.id).then(doc => {
            res.status(200).send(doc);
        }).catch(error => {
            next(error);
        });
    }

    findByIdAndUpdate(req, res, next) {
        this.Model.findByIdAndUpdate(req.params.id, { $set: req.body }).then(doc => {
            res.status(204).send(doc);
        }).catch(error => {
            next(error);
        });
    }

    findByIdAndDelete(req, res, next) {
        this.Model.findByIdAndDelete(req.params.id).then(doc => {
            res.status(204).send(doc);
        }).catch(error => {
            next(error);
        });
    }
}

module.exports = Controller