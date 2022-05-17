// настройка сервера. В это можно сильно не вникать
const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: '*', 
    credentials: true, 
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json());
app.listen(3000, function () {
    console.log("Server working on localhost:3000");
});

// биндим путь /hello-message c типом запроса POST
app.post("/hello-message", function(request, response) {
        // достаем из тела запроса name
        const name = request.body.name;
        // создаем сообщение
        const helloMessage = "Hello " + name;
        // отправляем ответ
        response.send({ message: helloMessage });
    });

