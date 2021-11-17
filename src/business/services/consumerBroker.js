const RabbitConsumer = require('../../infra/proxyRMQ/connection');
const SendNotification = require('./sendNotification');

class Consumer {
  constructor(){
    this.sendNotification = new SendNotification();
  }

  async consume(){
    const message = await RabbitConsumer.instance().consumeMessage()    
    console.log(message);
    /* this.sendNotification.sendNotification(JSON.parse(message)); */
  }
}

module.exports = Consumer