const express = require("express");
const cors = require("cors");
const recursiveReaddir = require("recursive-readdir");
const path = require("path");

const ConsumerBroker = require("../src/business/services/consumerBroker");
const consumerBroker = new ConsumerBroker();

class App {
  constructor () {
    this.server = express();
    this.server.use(cors());
    this.routes();
    this.initConsumer();
    
  }

  initConsumer(){
    consumerBroker.consume();
  }

  routes () {   

    const pathFiles = path.resolve(
      path.resolve("./").concat("/src/rest/routes")
    );

    recursiveReaddir(pathFiles, ["!*.js"], (error, files) => {
      if (error) {
        console.error(
          `Src: app || Method: routes || ErrorMessage: Error to importing routes: ${error}`
        );
        process.exit(1);
      }

      files.forEach((element) => {
        const route = require(element);
        this.server.use(route);
      });
    });
  }
}

module.exports = new App().server;
