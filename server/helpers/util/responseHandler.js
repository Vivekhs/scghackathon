const statusCodes = require('../../configs/statusCodes');

module.exports = {
    success: (req, res, data) => {
        // we can log here all the success response
        res.json(data);
    },
    failure: (req, res, statusCode, error) => {
        // we can log req, res with error
        res.status(statusCode).json(statusCodes.HTTP[statusCode]);
    }
}
