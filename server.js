const express = require("express");
const path = require("path");
const app = express();



app.set("port", process.env.PORT || 8080);

app.use(express.static(__dirname + "/angularapp"));

app.listen(app.get("port"), () => {
    console.log("Escuchando en el puerto " + app.get("port"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/angularapp/index.html"));
});

