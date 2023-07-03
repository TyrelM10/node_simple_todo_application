const express = require('express');
const mongoose = require('mongoose');

// connection to mongo
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const app  = express()
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/todo"))

app.listen(3000, () => console.log("SERVER HAS STARTED AT PORT 3000...."))