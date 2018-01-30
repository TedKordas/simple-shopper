require ('dotenv').config();

const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}) )

app.post('/session/add', (req, res,) => {
    
})

// let fakeMiddleware = function(req, res, next) {
//     if (req.body.username === "mscott" && req.body.password === "dundies") {
//         next();
//     }else{
//         res.status(403).send('Get out of here Dwight!');
//     }
// }

// app.post('/test', fakeMiddleware, (req, res) => {
//     let employeeData=[{name: "Dwight"}, {name: "Michael"}, {name: "Jim"}, {name: "Pam"}];
//     res.status(200).send(employeeData);
// })

const {SERVER_PORT} = process.env;
app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))