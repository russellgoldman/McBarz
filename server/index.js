const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
// const urlencodedParser = bodyParser.urlencoded({ extended: true });

// twilio variables
const accountSid = 'ACe835bf0616617ba28ca1d14ac93577ea';
const authToken = 'e01f36e6930f129235b7bf608f39d76b';
const client = require('twilio')(accountSid, authToken);
const fromNum = "+16474924505";

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post('/send', (req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    console.log("body:", req.body);
    console.log("name:", name);
    console.log("number:", number);
    client.messages
    .create({
     body: `Hey ${name}, your drink is ready!`,
     from: fromNum,
     to: number
   })
    .then(message => console.log(message.sid))
    .done();

});

app.listen(8080, () => {
    console.log("listening on port 8080");
});
