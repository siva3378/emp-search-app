module.exports = function(app) {
    var Employee = require('./models/Employee.js');
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });


    // all employee routes
    app.get('/api/employees', function(req, res) {
        var query = {};
        if (req.query.search) {
            var exp = "/" + req.query.search + "/";
            query = {
                $or: [
                    { first_name: { $regex: new RegExp(req.query.search,"i") } },
                    { last_name: { $regex: new RegExp(req.query.search,"i") } }
                ]
            }
        }
        console.log(req.query, query);
        Employee.findAsync(query, { contact: 0 })
            .then(respondWithResult(res))
            .catch(handleError(res));
    });

    app.get('/api/employees/:id', function(req, res) {
        Employee.findByIdAsync(req.params.id)
            .then(handleEntityNotFound(res))
            .then(respondWithResult(res))
            .catch(handleError(res));
    });

    // common function 
    function respondWithResult(res, statusCode) {
        statusCode = statusCode || 200;
        return function(entity) {
            if (entity) {
                res.status(statusCode).json(entity);
            }
        };
    }

    function handleEntityNotFound(res) {
        return function(entity) {
            if (!entity) {
                res.status(404).end();
                return null;
            }
            return entity;
        };
    }

    function handleError(res, statusCode) {
        statusCode = statusCode || 500;
        return function(err) {
            res.status(statusCode).send(err);
        };
    }
};
