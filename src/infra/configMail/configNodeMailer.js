const nodemailer = require("nodemailer");

class ConfigNodeMailerInfra {    

    constructor() {
        
      }
    async configTransporter() {

        let transporter = nodemailer.createTransport({

            host: process.env.SMTP_MAIL,
            port: process.env.PORT_MAIL,
            secure: false,
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.PASSWORD_MAIL
            }

        });

        return transporter;
    }
}

module.exports = ConfigNodeMailerInfra;