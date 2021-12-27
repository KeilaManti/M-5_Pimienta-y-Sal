const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));

let indexRouter = require("./routes/main");

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use("/", indexRouter);

app.listen(3000, () => {
	console.log("Servidor funcionando");
});