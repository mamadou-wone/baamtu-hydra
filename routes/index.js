const {
    HydraController
} = require('./../controller');

module.exports = (app) => {
    app.get('/getInvoices', HydraController.getInvoices);
    app.get('/getPayments', HydraController.getPayments);
};