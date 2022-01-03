const fs = require('fs');

module.exports = {
    /**
     * @api {get} /getInvoices 
     * @apiName getInvoice
     * @apiGroup Baamtu/Waw-Telecom
     *
     *
     * @apiSuccess (Success 200) {Object} result Invoices
     */
    async getInvoices(req, res) {
        try {
            fs.readFile('invoice.json', (err, data) => {
                if (err) throw err;
                let invoice = JSON.parse(data);
                res.status(200).send({
                    success: true,
                    data: invoice
                });
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },

    /**
     * @api {get} /getPayments 
     * @apiName getPayments
     * @apiGroup Baamtu/Waw-Telecom
     *
     *
     * @apiSuccess (Success 200) {Object} result Payments
     */
    async getPayments(req, res) {
        try {
            fs.readFile('payment.json', (err, data) => {
                if (err) throw err;
                let payment = JSON.parse(data);
                res.status(200).send({
                    success: true,
                    data: payment
                });
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },

}