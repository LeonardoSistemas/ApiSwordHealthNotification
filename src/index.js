function loadenv () {   
    const env = "dev";
    return `.env.${env}`;
  }
  
  require("dotenv").config({
    path: loadenv()
  });
  process.setMaxListeners(Infinity);
  /* const logger = require("./common/logsHandler.js"); */
  
  const app = require("./app");
  app.listen(process.env.PORT, () => {
    console.log(
      ("\x1b[33m%s\x1b[0m",
      `ENV: ${process.env.NODE_ENV}  URL: ${process.env.URL} PORT: ${process.env.PORT}`)
    );
  });
  