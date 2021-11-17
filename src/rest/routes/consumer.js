const { Router } = require("express");
const routes = Router();

const ConsumerBroker = require("../../business/services/consumerBroker");
const consumerBroker = new ConsumerBroker();

routes.get("/consumer", (req, res) => {
    consumerBroker.consume();
});


module.exports = routes;
