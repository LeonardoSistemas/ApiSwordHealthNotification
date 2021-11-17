const ConfigNodeMailerInfra = require("../../infra/configMail/configNodeMailer");

class NotificationService {
  constructor() {
    this.configNodeMailerInfra = new ConfigNodeMailerInfra();
  }

  async sendNotification(message) {
    
    message = JSON.parse(message);
    let transporter = await this.configNodeMailerInfra.configTransporter();
    
    transporter.sendMail({
        from: process.env.USER_MAIL,
        to:"leonardosistemas@outlook.com",
        subject:"Evaluation - Sword Health",
        text:`O técnico ${message[0].name} - Realizou a tarefa: ${message[0].task.description} - na data: ${message[0].task.completiondate}`,
    }).then(message =>{
        console.log(message);
    }).catch(err => {
        console.log(err);
    })
  }
}

module.exports = NotificationService;
