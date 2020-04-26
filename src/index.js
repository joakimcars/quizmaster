const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const quizBuilder = require("./pages/quiz-builder");
const quizMaster = require("./pages/quiz-master");
const quizPlay = require("./pages/quiz-player");
const quizHome = require("./pages/quiz-homepage");
const api = require("./api/api");
// const io = require("socket.io")(server);
const requestLogger = require("./request-logger");

app.use(requestLogger());
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./www"));

app.use(quizHome);
app.use(quizBuilder);
app.use(quizMaster);
app.use(quizPlay);
app.use(api);

server.listen(8080);