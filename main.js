const express = require("express");
const app = express();
const login = require("./routes/login");
const register = require("./routes/register");
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);
app.use('/login', login);
app.use('/register', register);

app.listen(3000);